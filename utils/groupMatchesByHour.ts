import { Match } from "@/types/match";

export function groupMatchesByHour(matches: Match[]) {
  return matches.reduce(
    (acc, match) => {
      const hour = new Date(match.startTime).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      if (!acc[hour]) {
        acc[hour] = [];
      }

      acc[hour].push(match);

      return acc;
    },
    {} as Record<string, Match[]>
  );
}