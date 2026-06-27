import { Bet } from "@/types/bet";
import { Match } from "@/types/match";
import { formatPick, formatStatus } from "@/utils/formatBet";
import Link from "next/link";

interface Props {
  bet: Bet;
  match: Match;
}

function getStatusClasses(status: Bet["status"]) {
  if (status === "WON") {
    return "bg-green-50 text-green-700 border-green-200";
  }

  if (status === "LOST") {
    return "bg-red-50 text-red-700 border-red-200";
  }

  return "bg-yellow-50 text-yellow-700 border-yellow-200";
}

export default function BetCard({ bet, match }: Props) {
  return (
    <Link href={`/bets/${bet.id}`} className="block">
      <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-500 hover:shadow-xl">
        <div className="border-b border-zinc-200 bg-zinc-50 px-5 py-4">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {match.league.name}
            </span>

            <span
              className={`rounded-full border px-3 py-1 text-xs font-bold ${getStatusClasses(
                bet.status
              )}`}
            >
              {formatStatus(bet.status)}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                Local
              </p>

              <h2 className="mt-1 text-lg font-extrabold leading-tight text-zinc-950">
                {match.homeTeam.name}
              </h2>

              <p className="mt-1 text-sm font-bold text-zinc-500">
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

              <h2 className="mt-1 text-lg font-extrabold leading-tight text-zinc-950">
                {match.awayTeam.name}
              </h2>

              <p className="mt-1 text-sm font-bold text-zinc-500">
                {match.awayTeam.shortName}
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                Selección
              </p>

              <p className="mt-1 text-2xl font-black text-red-600">
                {formatPick(bet.pick)}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                Cuota
              </p>

              <p className="mt-1 text-2xl font-black text-zinc-950">
                {bet.odd.toFixed(2)}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                Importe
              </p>

              <p className="mt-1 text-2xl font-black text-zinc-950">
                S/ {bet.stake}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}