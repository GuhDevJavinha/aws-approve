import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

interface DynamoConfig {
  client: DynamoDBDocumentClient;
  tableName: string;
}

let cachedConfig: DynamoConfig | undefined;

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} must be set`);
  return value;
}

function readCredentials() {
  const accessKeyId = process.env.DYNAMODB_ACCESS_KEY_ID;
  const secretAccessKey = process.env.DYNAMODB_SECRET_ACCESS_KEY;
  if (!accessKeyId || !secretAccessKey) return undefined;
  return { accessKeyId, secretAccessKey };
}

export function getDynamo(): DynamoConfig {
  cachedConfig ??= {
    client: DynamoDBDocumentClient.from(
      new DynamoDBClient({
        region: requireEnv("DYNAMODB_REGION"),
        credentials: readCredentials(),
      }),
      { marshallOptions: { removeUndefinedValues: true } }
    ),
    tableName: requireEnv("DYNAMODB_TABLE"),
  };
  return cachedConfig;
}
