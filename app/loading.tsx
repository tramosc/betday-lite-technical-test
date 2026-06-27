export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="mb-10 h-8 w-64 animate-pulse rounded bg-slate-800" />

      <div className="space-y-10">
        {[1, 2, 3].map((hour) => (
          <section key={hour}>
            <div className="mb-5 h-7 w-24 animate-pulse rounded bg-slate-800" />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3].map((card) => (
                <div
                  key={card}
                  className="h-56 animate-pulse rounded-xl border border-slate-800 bg-slate-900"
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}