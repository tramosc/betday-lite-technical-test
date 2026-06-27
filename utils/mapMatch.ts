import { Match } from "@/types/match";

export interface MatchDto {
  id: string;
  startTime: string;

  league: {
    id: string;
    name: string;
    country: string;
  };

  homeTeam: {
    id: string;
    name: string;
    shortName: string;
  };

  awayTeam: {
    id: string;
    name: string;
    shortName: string;
  };

  market: {
    type: string;

    odds: {
      home: number;
      draw: number;
      away: number;
    };
  };
}

export function mapMatch(
    match: MatchDto
): Match {
  return {
    id: match.id,
    startTime: match.startTime,
    league: match.league,
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    market: {
      type: "1X2",
      odds: {
        home: match.market.odds.home,
        draw: match.market.odds.draw,
        away: match.market.odds.away,
      },
    },
  };
}