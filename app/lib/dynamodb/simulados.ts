import { GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import type { Simulado } from "@/types/simulado";
import { getDynamo } from "./client";
import {
  fromItems,
  META_SORT_KEY,
  toMeta,
  type MetaItem,
  type SimuladoItem,
  type SimuladoMeta,
} from "./simulado-items";

export async function getSimuladoMeta(slug: string): Promise<SimuladoMeta | undefined> {
  const { client, tableName } = getDynamo();
  const { Item } = await client.send(
    new GetCommand({ TableName: tableName, Key: { simuladoSlug: slug, sk: META_SORT_KEY } })
  );
  return Item ? toMeta(Item as MetaItem) : undefined;
}

export async function getSimuladoBySlug(slug: string): Promise<Simulado | undefined> {
  const { client, tableName } = getDynamo();
  const items: SimuladoItem[] = [];
  let exclusiveStartKey: Record<string, unknown> | undefined;

  do {
    const page = await client.send(
      new QueryCommand({
        TableName: tableName,
        KeyConditionExpression: "simuladoSlug = :slug",
        ExpressionAttributeValues: { ":slug": slug },
        ExclusiveStartKey: exclusiveStartKey,
      })
    );
    items.push(...((page.Items ?? []) as SimuladoItem[]));
    exclusiveStartKey = page.LastEvaluatedKey;
  } while (exclusiveStartKey);

  return fromItems(items);
}
