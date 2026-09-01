import type { Attempt, CompletedResult } from "@/types/simulado";

const inProgressKey = (slug: string) => `aws-approve:attempt:${slug}`;
const historyKey = (slug: string) => `aws-approve:history:${slug}`;

export function saveInProgressAttempt(attempt: Attempt): void {
  localStorage.setItem(inProgressKey(attempt.simuladoSlug), JSON.stringify(attempt));
}

export function loadInProgressAttempt(slug: string): Attempt | null {
  const raw = localStorage.getItem(inProgressKey(slug));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Attempt;
  } catch {
    return null;
  }
}

export function clearInProgressAttempt(slug: string): void {
  localStorage.removeItem(inProgressKey(slug));
}

export function saveCompletedResult(result: CompletedResult): void {
  const history = loadHistory(result.simuladoSlug);
  history.push(result);
  localStorage.setItem(historyKey(result.simuladoSlug), JSON.stringify(history));
}

export function loadHistory(slug: string): CompletedResult[] {
  const raw = localStorage.getItem(historyKey(slug));
  if (!raw) return [];
  try {
    return JSON.parse(raw) as CompletedResult[];
  } catch {
    return [];
  }
}

export function getBestScore(slug: string): number | null {
  const history = loadHistory(slug);
  if (history.length === 0) return null;
  return Math.max(...history.map((entry) => entry.scorePercent));
}
