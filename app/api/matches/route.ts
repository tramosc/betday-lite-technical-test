import { NextResponse } from "next/server";
import matchesData from "@/data/matches.today.50.json";

export async function GET() {
  return NextResponse.json(matchesData);
}