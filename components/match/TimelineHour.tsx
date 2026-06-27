import { Match } from "@/types/match";
import MatchCard from "./MatchCard";

interface Props {
  hour: string;
  matches: Match[];
}

export default function TimelineHour({ hour, matches }: Props) {
  return (
    <section className="relative">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-lg font-extrabold text-white shadow-lg shadow-red-200">
          🕒
        </div>

        <div className="flex-1 border-b border-zinc-200 pb-3">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-950">
            {hour}
          </h2>

          <p className="mt-1 text-sm font-medium text-zinc-500">
            {matches.length} {matches.length === 1 ? "evento" : "eventos"}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </section>
  );
}