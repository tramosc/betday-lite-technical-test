"use client";

import { Match } from "@/types/match";
import { groupMatchesByHour } from "@/utils/groupMatchesByHour";
import TimelineHour from "./TimelineHour";

interface Props {
  matches: Match[];
}

export default function MatchTimeline({ matches }: Props) {
  const groupedMatches = groupMatchesByHour(matches);
  const totalMatches = matches.length;
  const totalHours = Object.keys(groupedMatches).length;

  return (
    <section>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-600">
            Línea de tiempo
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-zinc-950">
            Partidos de hoy
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-600 shadow-sm">
          <span className="font-bold text-zinc-950">{totalMatches}</span>{" "}
          eventos ·{" "}
          <span className="font-bold text-zinc-950">{totalHours}</span>{" "}
          horarios
        </div>
      </div>

      <div className="space-y-10">
        {Object.entries(groupedMatches).map(([hour, matches]) => (
          <TimelineHour key={hour} hour={hour} matches={matches} />
        ))}
      </div>
    </section>
  );
}