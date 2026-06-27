import matches from "@/data/matches.today.50.json";
import { Match } from "@/types/match";
import { mapMatch } from "@/utils/mapMatch";

export class MatchService {
  static getAll(): Match[] {
    return matches.matches.map(mapMatch);
  }

  static getById(id: string): Match | undefined {
    return this.getAll().find((match) => match.id === id);
  }
}