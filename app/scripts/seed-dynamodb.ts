import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { BatchWriteCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { getDynamo } from "@/lib/dynamodb/client";
import { toItems, type SimuladoItem } from "@/lib/dynamodb/simulado-items";
import type { Simulado } from "@/types/simulado";

const BATCH_SIZE = 25;
const MAX_RETRIES = 8;

// TODO: remover itens Q# antigos quando um banco de questões encolher.

async function loadSimulados(registryPath: string | undefined): Promise<Simulado[]> {
  if (!registryPath) {
    throw new Error("Uso: bun run seed:dynamodb <caminho/para/_data/index.ts> [slug]");
  }
  const registry = (await import(pathToFileURL(resolve(registryPath)).href)) as {
    simulados: Simulado[];
  };
  return registry.simulados;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function writeBatch(batch: SimuladoItem[]): Promise<void> {
  const { client, tableName } = getDynamo();
  let pending: Record<string, unknown>[] = batch.map((Item) => ({ PutRequest: { Item } }));

  for (let attempt = 0; pending.length > 0; attempt++) {
    if (attempt > MAX_RETRIES) throw new Error(`${pending.length} itens não gravados após ${MAX_RETRIES} tentativas`);
    if (attempt > 0) await sleep(2 ** attempt * 100);

    const { UnprocessedItems } = await client.send(
      new BatchWriteCommand({ RequestItems: { [tableName]: pending as never } })
    );
    pending = (UnprocessedItems?.[tableName] ?? []) as Record<string, unknown>[];
  }
}

async function countItems(slug: string): Promise<number> {
  const { client, tableName } = getDynamo();
  let total = 0;
  let exclusiveStartKey: Record<string, unknown> | undefined;

  do {
    const page = await client.send(
      new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: "simuladoSlug = :slug",
        ExpressionAttributeValues: { ":slug": slug },
        Select: "COUNT",
        ConsistentRead: true,
        ExclusiveStartKey: exclusiveStartKey,
      })
    );
    total += page.Count ?? 0;
    exclusiveStartKey = page.LastEvaluatedKey;
  } while (exclusiveStartKey);

  return total;
}

function useCliCredentials(): void {
  delete process.env.DYNAMODB_ACCESS_KEY_ID;
  delete process.env.DYNAMODB_SECRET_ACCESS_KEY;
}

async function main(): Promise<void> {
  useCliCredentials();
  const simulados = await loadSimulados(process.argv[2]);
  const only = process.argv[3];
  const targets = only ? simulados.filter((s) => s.slug === only) : simulados;
  if (targets.length === 0) throw new Error(`Nenhum simulado com slug "${only}"`);

  let failed = false;

  for (const simulado of targets) {
    const items = toItems(simulado);
    for (let i = 0; i < items.length; i += BATCH_SIZE) {
      await writeBatch(items.slice(i, i + BATCH_SIZE));
    }

    const stored = await countItems(simulado.slug);
    const status = stored >= items.length ? "ok" : "FALTANDO";
    if (stored < items.length) failed = true;
    console.log(`${status}  ${simulado.slug}: ${simulado.questions.length} questões, ${stored} itens (esperado ${items.length})`);
  }

  if (failed) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
