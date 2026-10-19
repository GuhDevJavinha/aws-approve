import { createHmac } from "node:crypto";
import {
  CognitoIdentityProviderClient,
  GetUserCommand,
  GlobalSignOutCommand,
  InitiateAuthCommand,
  RespondToAuthChallengeCommand,
} from "@aws-sdk/client-cognito-identity-provider";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} must be set`);
  return value;
}

interface CognitoConfig {
  client: CognitoIdentityProviderClient;
  clientId: string;
  clientSecret: string;
}

let cachedConfig: CognitoConfig | undefined;

function getConfig(): CognitoConfig {
  cachedConfig ??= {
    client: new CognitoIdentityProviderClient({ region: requireEnv("COGNITO_REGION") }),
    clientId: requireEnv("COGNITO_CLIENT_ID"),
    clientSecret: requireEnv("COGNITO_CLIENT_SECRET"),
  };
  return cachedConfig;
}

function secretHash(username: string): string {
  const { clientId, clientSecret } = getConfig();
  return createHmac("sha256", clientSecret).update(username + clientId).digest("base64");
}

function decodeUsername(accessToken: string): string {
  const payload = accessToken.split(".")[1];
  if (!payload) throw new CognitoAuthError("Token de acesso inválido.");
  const claims = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  if (typeof claims.username !== "string") throw new CognitoAuthError("Token de acesso inválido.");
  return claims.username;
}

export class CognitoAuthError extends Error {}

function mapSignInError(error: unknown): string {
  const name = error instanceof Error ? error.name : "";
  switch (name) {
    case "NotAuthorizedException":
    case "UserNotFoundException":
      return "Email ou senha inválidos.";
    case "UserNotConfirmedException":
      return "Sua conta ainda não foi confirmada no Cognito.";
    case "PasswordResetRequiredException":
      return "Você precisa redefinir sua senha antes de entrar.";
    case "TooManyRequestsException":
      return "Muitas tentativas. Aguarde um instante e tente novamente.";
    case "InvalidParameterException":
      return "Configuração do App Client não permite este tipo de login (verifique se ALLOW_USER_PASSWORD_AUTH está habilitado no Cognito).";
    case "ResourceNotFoundException":
    case "UnrecognizedClientException":
      return "Configuração do Cognito inválida (Client ID ou secret incorretos).";
    default:
      console.error("Cognito signIn error:", error);
      return "Não foi possível entrar. Tente novamente.";
  }
}

function mapNewPasswordError(error: unknown): string {
  const name = error instanceof Error ? error.name : "";
  switch (name) {
    case "InvalidPasswordException":
      return "A nova senha não atende aos requisitos do Cognito (tamanho, letras maiúsculas, números etc.).";
    case "NotAuthorizedException":
    case "CodeMismatchException":
    case "ExpiredCodeException":
      return "Sessão expirada. Faça login novamente.";
    default:
      console.error("Cognito completeNewPassword error:", error);
      return "Não foi possível redefinir a senha. Tente novamente.";
  }
}

export interface CognitoTokens {
  accessToken: string;
  refreshToken: string;
  expiresInSeconds: number;
  username: string;
}

export type SignInResult =
  | { status: "success"; tokens: CognitoTokens }
  | { status: "new_password_required"; session: string };

function tokensFromAuthResult(auth: {
  AccessToken?: string;
  RefreshToken?: string;
  ExpiresIn?: number;
} | undefined): CognitoTokens {
  if (!auth?.AccessToken || !auth.RefreshToken || !auth.ExpiresIn) {
    throw new CognitoAuthError("Não foi possível concluir o login.");
  }
  return {
    accessToken: auth.AccessToken,
    refreshToken: auth.RefreshToken,
    expiresInSeconds: auth.ExpiresIn,
    username: decodeUsername(auth.AccessToken),
  };
}

export async function signIn(email: string, password: string): Promise<SignInResult> {
  const { client, clientId } = getConfig();
  try {
    const result = await client.send(
      new InitiateAuthCommand({
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: clientId,
        AuthParameters: { USERNAME: email, PASSWORD: password, SECRET_HASH: secretHash(email) },
      })
    );

    if (result.ChallengeName === "NEW_PASSWORD_REQUIRED") {
      if (!result.Session) throw new CognitoAuthError("Não foi possível iniciar a redefinição de senha.");
      return { status: "new_password_required", session: result.Session };
    }

    if (result.ChallengeName) {
      throw new CognitoAuthError(
        "Sua conta precisa concluir uma etapa adicional no Cognito antes de entrar."
      );
    }

    return { status: "success", tokens: tokensFromAuthResult(result.AuthenticationResult) };
  } catch (error) {
    if (error instanceof CognitoAuthError) throw error;
    throw new CognitoAuthError(mapSignInError(error));
  }
}

export async function completeNewPassword(
  email: string,
  newPassword: string,
  session: string
): Promise<CognitoTokens> {
  const { client, clientId } = getConfig();
  try {
    const result = await client.send(
      new RespondToAuthChallengeCommand({
        ChallengeName: "NEW_PASSWORD_REQUIRED",
        ClientId: clientId,
        Session: session,
        ChallengeResponses: {
          USERNAME: email,
          NEW_PASSWORD: newPassword,
          SECRET_HASH: secretHash(email),
        },
      })
    );

    if (result.ChallengeName) {
      throw new CognitoAuthError("Sua conta precisa concluir outra etapa no Cognito antes de entrar.");
    }

    return tokensFromAuthResult(result.AuthenticationResult);
  } catch (error) {
    if (error instanceof CognitoAuthError) throw error;
    throw new CognitoAuthError(mapNewPasswordError(error));
  }
}

export interface RefreshedTokens {
  accessToken: string;
  expiresInSeconds: number;
  refreshToken?: string;
}

export async function refreshTokens(
  refreshToken: string,
  username: string
): Promise<RefreshedTokens | null> {
  const { client, clientId } = getConfig();
  try {
    const result = await client.send(
      new InitiateAuthCommand({
        AuthFlow: "REFRESH_TOKEN_AUTH",
        ClientId: clientId,
        AuthParameters: { REFRESH_TOKEN: refreshToken, SECRET_HASH: secretHash(username) },
      })
    );
    const auth = result.AuthenticationResult;
    if (!auth?.AccessToken || !auth.ExpiresIn) return null;
    return { accessToken: auth.AccessToken, expiresInSeconds: auth.ExpiresIn, refreshToken: auth.RefreshToken };
  } catch {
    return null;
  }
}

export async function getCognitoUser(accessToken: string): Promise<{ email: string } | null> {
  const { client } = getConfig();
  try {
    const result = await client.send(new GetUserCommand({ AccessToken: accessToken }));
    const email = result.UserAttributes?.find((attribute) => attribute.Name === "email")?.Value;
    return email ? { email } : null;
  } catch {
    return null;
  }
}

export async function signOut(accessToken: string): Promise<void> {
  const { client } = getConfig();
  try {
    await client.send(new GlobalSignOutCommand({ AccessToken: accessToken }));
  } catch {
    // token already invalid or expired — nothing left to revoke
  }
}
