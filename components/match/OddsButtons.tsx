"use client";

import { Match } from "@/types/match";
import { Bet, BetPick } from "@/types/bet";
import { BetApiService } from "@/services/bet-api.service";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  match: Match;
}

const BET_OPTIONS: {
  label: "1" | "X" | "2";
  subtitle: string;
  pick: BetPick;
  getOdd: (match: Match) => number;
}[] = [
  {
    label: "1",
    subtitle: "Local",
    pick: "HOME",
    getOdd: (match) => match.market.odds.home,
  },
  {
    label: "X",
    subtitle: "Empate",
    pick: "DRAW",
    getOdd: (match) => match.market.odds.draw,
  },
  {
    label: "2",
    subtitle: "Visita",
    pick: "AWAY",
    getOdd: (match) => match.market.odds.away,
  },
];

export default function OddsButtons({ match }: Props) {
  const router = useRouter();
  const { data: session } = useSession();

  const handleBet = async (pick: BetPick, odd: number) => {
    if (!session) {
      router.push(`/login?callbackUrl=/`);
      return;
    }

    const newBet: Bet = {
      id: `local_${crypto.randomUUID()}`,
      matchId: match.id,
      placedAt: new Date().toISOString(),
      pick,
      odd,
      stake: 10,
      status: "PENDING",
      return: null,
    };

    try {
      await BetApiService.create(newBet);
      toast.success("Apuesta realizada correctamente");
    } catch {
      toast.error("No se pudo registrar la apuesta");
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
          Mercado 1X2
        </p>

        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600">
          Apostar  S/ 10
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {BET_OPTIONS.map((option) => {
          const odd = option.getOdd(match);

          return (
            <button
              key={option.pick}
              onClick={() => handleBet(option.pick, odd)}
              className="group rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-center transition hover:-translate-y-0.5 hover:border-red-600 hover:bg-red-600 hover:shadow-lg hover:shadow-red-100"
            >
              <span className="block text-xs font-bold uppercase tracking-wide text-zinc-500 group-hover:text-red-100">
                {option.subtitle}
              </span>

              <span className="mt-1 block text-xl font-black text-zinc-950 group-hover:text-white">
                {option.label}
              </span>

              <span className="mt-1 block text-lg font-extrabold text-red-600 group-hover:text-white">
                {odd.toFixed(2)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}