import { CognitoAuthError } from "./cognito";

export async function cognitoErrorMessage(action: () => Promise<void>): Promise<string | null> {
  try {
    await action();
    return null;
  } catch (error) {
    if (error instanceof CognitoAuthError) return error.message;
    throw error;
  }
}
