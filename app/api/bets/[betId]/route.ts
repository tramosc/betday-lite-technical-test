import { NextResponse } from "next/server";
import { getBaseUrl } from "@/lib/getBaseUrl";

interface Props {
  params: Promise<{
    betId: string;
  }>;
}

export async function GET(_request: Request, { params }: Props) {
  const { betId } = await params;

  const response = await fetch(`${getBaseUrl()}/api/bets`, {
    cache: "no-store",
  });

  const data = await response.json();

  const bet = data.bets.find((item: { id: string }) => item.id === betId);

  if (!bet) {
    return NextResponse.json(
      { message: "Bet not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ bet });
}