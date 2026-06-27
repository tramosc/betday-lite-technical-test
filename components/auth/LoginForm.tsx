"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("demo@betday.com");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    setIsLoading(false);

    if (response?.error) {
      setError("Credenciales incorrectas.");
      return;
    }

    router.push(response?.url || "/");
    router.refresh();
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-black text-white">
          B
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950">
          BetDay Lite
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Ingresa para simular tus apuestas deportivas
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
          />
        </div>

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl bg-red-600 py-3 font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
        <p className="mb-2 font-bold text-zinc-900">
          Cuenta demo
        </p>

        <p>Email: demo@betday.com</p>
        <p>Password: demo123</p>
      </div>
    </div>
  );
}