import BetCard from "@/components/bet/BetCard";
import EmptyState from "@/components/common/EmptyState";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { MatchService } from "@/services/match.service";
import { Bet } from "@/types/bet";

async function getBets(): Promise<Bet[]> {
  const response = await fetch(`${getBaseUrl()}/api/bets`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Error fetching bets");
  }

  const data = await response.json();

  return data.bets;
}

export default async function ProfilePage() {
  const bets = await getBets();
  const matches = MatchService.getAll();

  const pendingBets = bets.filter((bet) => bet.status === "PENDING").length;
  const wonBets = bets.filter((bet) => bet.status === "WON").length;
  const lostBets = bets.filter((bet) => bet.status === "LOST").length;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 rounded-3xl border border-zinc-200 bg-white px-6 py-8 shadow-sm">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-600">
          Perfil
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
          Mis apuestas
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-500">
          Revisa tu historial de apuestas simuladas, cuotas seleccionadas y estados actuales.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm font-medium text-zinc-500">Total</p>
            <p className="mt-1 text-2xl font-black text-zinc-950">
              {bets.length}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm font-medium text-zinc-500">Pendientes</p>
            <p className="mt-1 text-2xl font-black text-yellow-600">
              {pendingBets}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm font-medium text-zinc-500">Ganadas</p>
            <p className="mt-1 text-2xl font-black text-green-600">
              {wonBets}
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm font-medium text-zinc-500">Perdidas</p>
            <p className="mt-1 text-2xl font-black text-red-600">
              {lostBets}
            </p>
          </div>
        </div>
      </section>

      {bets.length === 0 ? (
        <EmptyState
          title="Todavía no hay apuestas."
          description="Aún no has realizado ninguna apuesta. Explora los partidos de hoy y haz tu primera apuesta simulada."
          actionLabel="Ir a los partidos"
          actionHref="/"
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bets.map((bet) => {
            const match = matches.find((item) => item.id === bet.matchId);

            if (!match) return null;

            return <BetCard key={bet.id} bet={bet} match={match} />;
          })}
        </div>
      )}
    </main>
  );
}