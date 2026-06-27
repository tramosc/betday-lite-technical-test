import BetCard from "@/components/bet/BetCard";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { MatchService } from "@/services/match.service";
import { Bet } from "@/types/bet";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    betId: string;
  }>;
}

async function getBet(betId: string): Promise<Bet | null> {
  const response = await fetch(`${getBaseUrl()}/api/bets/${betId}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  const data = await response.json();

  return data.bet;
}

export default async function BetDetailPage({ params }: Props) {
  const { betId } = await params;

  const bet = await getBet(betId);

  if (!bet) {
    notFound();
  }

  const match = MatchService.getById(bet.matchId);

  if (!match) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/profile"
        className="mb-8 inline-flex items-center rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:border-red-600 hover:text-white"
      >
        ← Volver a mis apuestas
      </Link>

      <section className="mb-8 rounded-3xl border border-zinc-800 bg-zinc-950 px-6 py-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
          Detalle
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Detalle de la apuesta
        </h1>

        <p className="mt-4 text-zinc-400">
          Consulta la selección realizada, cuota, importe y estado de esta apuesta simulada.
        </p>
      </section>

      <BetCard bet={bet} match={match} />
    </main>
  );
}