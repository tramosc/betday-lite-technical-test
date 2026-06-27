import initialBets from "@/data/bets.me.50.json";
import { Bet } from "@/types/bet";
import { getStoredBets, saveBet } from "@/utils/bet-storage";
import { mapBet } from "@/utils/mapBet";

export class BetService {
  static getAll(): Bet[] {
    return [
      ...getStoredBets(),
      ...initialBets.bets.map(mapBet),
    ];
  }

  static create(bet: Bet): void {
    saveBet(bet);
  }

  static getById(id: string): Bet | undefined {
    return this.getAll().find((bet) => bet.id === id);
  }
}