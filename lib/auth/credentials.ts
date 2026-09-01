export function verifyCredentials(email: string, password: string): boolean {
  const validEmail = process.env.APP_LOGIN_EMAIL;
  const validPassword = process.env.APP_LOGIN_PASSWORD;
  if (!validEmail || !validPassword) {
    throw new Error("APP_LOGIN_EMAIL and APP_LOGIN_PASSWORD must be set");
  }
  return email === validEmail && password === validPassword;
}
