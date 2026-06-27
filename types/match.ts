export interface Team {
  id: string;
  name: string;
  shortName: string;
}

export interface League {
  id: string;
  name: string;
  country: string;
}

export interface Match {
  id: string;
  startTime: string;
  league: League;
  homeTeam: Team;
  awayTeam: Team;
  market: {
    type: "1X2";
    odds: {
      home: number;
      draw: number;
      away: number;
    };
  };
}

export interface MatchesResponse {
  date: string;
  timezone: string;
  matches: Match[];
}