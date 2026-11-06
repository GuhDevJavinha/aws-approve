export const PASSWORD_HINT = "Mínimo de 8 caracteres, com maiúscula, minúscula, número e símbolo.";

export function passwordsMismatch(formData: FormData, field: string, confirmField: string): boolean {
  return String(formData.get(field) ?? "") !== String(formData.get(confirmField) ?? "");
}
