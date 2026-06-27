import { BetPick, BetStatus } from "@/types/bet";

export function formatPick(pick: BetPick) {
  switch (pick) {
    case "HOME":
      return "1";

    case "DRAW":
      return "X";

    case "AWAY":
      return "2";

    default:
      return "-";
  }
}

export function formatStatus(status: BetStatus) {
  switch (status) {
    case "PENDING":
      return "Pending";

    case "WON":
      return "Won";

    case "LOST":
      return "Lost";

    default:
      return status;
  }
}