import { Bet } from "@/types/bet";

export class BetApiService {
  static async getAll(): Promise<Bet[]> {
    const response = await fetch("/api/bets", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Error fetching bets");
    }

    const data = await response.json();

    return data.bets;
  }

  static async create(bet: Bet): Promise<Bet> {
    const response = await fetch("/api/bets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bet),
    });

    if (!response.ok) {
      throw new Error("Error creating bet");
    }

    const data = await response.json();

    return data.bet;
  }
}