import { Bet, BetPick, BetStatus } from "@/types/bet";

interface BetDto {
  id: string;
  matchId: string;
  placedAt: string;
  pick: string;
  odd: number;
  stake: number;
  status: string;
  return: number | null;
}

function mapPick(pick: string): BetPick {
  if (pick === "HOME" || pick === "DRAW" || pick === "AWAY") {
    return pick;
  }

  return "HOME";
}

function mapStatus(status: string): BetStatus {
  if (status === "PENDING" || status === "WON" || status === "LOST") {
    return status;
  }

  return "PENDING";
}

export function mapBet(bet: BetDto): Bet {
  return {
    id: bet.id,
    matchId: bet.matchId,
    placedAt: bet.placedAt,
    pick: mapPick(bet.pick),
    odd: bet.odd,
    stake: bet.stake,
    status: mapStatus(bet.status),
    return: bet.return,
  };
}