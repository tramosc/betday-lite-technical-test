"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-lg font-black text-white">
            B
          </span>

          <span className="text-xl font-extrabold tracking-tight text-white">
            BetDay Lite
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium sm:gap-5">
          <Link href="/" className="text-zinc-300 transition hover:text-white">
            Inicio
          </Link>

          <Link
            href="/profile"
            className="text-zinc-300 transition hover:text-white"
          >
            Perfil
          </Link>

          {session ? (
            <>
              <span className="rounded-full bg-zinc-900 px-3 py-2 text-zinc-300">
                {session.user?.name}
              </span>

              <button
                onClick={() => signOut()}
                className="rounded-xl bg-red-600 px-5 py-2.5 font-bold text-white shadow-lg shadow-red-950/40 transition hover:bg-red-700"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-xl bg-red-600 px-5 py-2.5 font-bold text-white shadow-lg shadow-red-950/40 transition hover:bg-red-700"
            >
              Ingresar
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}