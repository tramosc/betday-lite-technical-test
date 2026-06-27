import { Match } from "@/types/match";
import OddsButtons from "./OddsButtons";

interface Props {
  match: Match;
}

export default function MatchCard({ match }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-xl hover:shadow-red-100/70">
      <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-4 transition group-hover:bg-red-50">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {match.league.name}
          </span>

          <span className="text-xs font-bold uppercase tracking-wide text-red-600">
            1X2
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
              Local
            </p>

            <h3 className="mt-1 text-lg font-extrabold leading-tight text-zinc-900">
              {match.homeTeam.name}
            </h3>

            <p className="mt-1 text-sm font-semibold text-zinc-500">
              {match.homeTeam.shortName}
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-xs font-black text-zinc-500">
            VS
          </div>

          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
              Visita
            </p>

            <h3 className="mt-1 text-lg font-extrabold leading-tight text-zinc-900">
              {match.awayTeam.name}
            </h3>

            <p className="mt-1 text-sm font-semibold text-zinc-500">
              {match.awayTeam.shortName}
            </p>
          </div>
        </div>

        <OddsButtons match={match} />
      </div>
    </article>
  );
}