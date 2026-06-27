import MatchTimeline from "@/components/match/MatchTimeline";
import { getBaseUrl } from "@/lib/getBaseUrl";

export default async function HomePage() {
  const response = await fetch(`${getBaseUrl()}/api/matches`, {
    cache: "no-store",
  });

  const data = await response.json();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 rounded-3xl border border-zinc-800 bg-zinc-950 px-6 py-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-500">
          BetDay Lite
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Eventos deportivos del día
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Revisa los partidos disponibles, compara cuotas 1X2 y realiza apuestas simuladas.
        </p>
      </section>

      <MatchTimeline matches={data.matches} />
    </main>
  );
}