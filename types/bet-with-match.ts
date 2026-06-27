import { Bet } from "./bet";
import { Match } from "./match";

export interface BetWithMatch extends Bet {
  match: Match;
}