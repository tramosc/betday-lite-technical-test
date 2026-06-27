import { Bet } from "@/types/bet";

const STORAGE_KEY = "betday-lite-bets";

export function getStoredBets(): Bet[] {
  if (typeof window === "undefined") return [];

  const data = window.localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data) as Bet[];
  } catch {
    return [];
  }
}

export function saveBet(bet: Bet) {
  const currentBets = getStoredBets();

  const updatedBets = [bet, ...currentBets];

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBets));

  return updatedBets;
}