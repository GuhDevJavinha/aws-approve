import { timingSafeEqual } from "node:crypto";

function timingSafeStringEqual(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  if (bufferA.length !== bufferB.length) return false;
  return timingSafeEqual(bufferA, bufferB);
}

export function verifyCredentials(email: string, password: string): boolean {
  const validEmail = process.env.APP_LOGIN_EMAIL;
  const validPassword = process.env.APP_LOGIN_PASSWORD;
  if (!validEmail || !validPassword) {
    throw new Error("APP_LOGIN_EMAIL and APP_LOGIN_PASSWORD must be set");
  }
  return (
    timingSafeStringEqual(email, validEmail) &&
    timingSafeStringEqual(password, validPassword)
  );
}
