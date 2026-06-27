import { NextResponse } from "next/server";
import initialBets from "@/data/bets.me.50.json";
import { Bet } from "@/types/bet";
import { mapBet } from "@/utils/mapBet";

let simulatedBets: Bet[] = [];

export async function GET() {
  const bets = [
    ...simulatedBets,
    ...initialBets.bets.map(mapBet),
  ];

  return NextResponse.json({ bets });
}

export async function POST(request: Request) {
  const bet = (await request.json()) as Bet;

  simulatedBets = [bet, ...simulatedBets];

  return NextResponse.json(
    {
      message: "Bet created successfully",
      bet,
    },
    { status: 201 }
  );
}