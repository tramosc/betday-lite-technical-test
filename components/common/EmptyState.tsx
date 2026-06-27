import Link from "next/link";

interface Props {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: Props) {
  return (
    <div className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-950 px-8 py-14 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-4xl shadow-lg shadow-red-950/40">
        🎫
      </div>

      <h2 className="text-3xl font-extrabold tracking-tight text-white">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-zinc-400">
        {description}
      </p>

      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-8 inline-flex items-center rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}