export type BetPick = "HOME" | "DRAW" | "AWAY";
export type BetStatus = "PENDING" | "WON" | "LOST";

export interface Bet {
  id: string;
  matchId: string;
  placedAt: string;
  pick: BetPick;
  odd: number;
  stake: number;
  status: BetStatus;
  return: number | null;
}

export interface BetsResponse {
  bets: Bet[];
}
