export interface Player {
  username: string;
  kills: number;
}

export interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  totalKills: number;
}

export type MatchStatus = "Scheduled" | "Ongoing" | "Finished";

export interface Match {
  time: Date;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

interface MatchesResponse {
  data: {
    matches: Match[];
  };
}
