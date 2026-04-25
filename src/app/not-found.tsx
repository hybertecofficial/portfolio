import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="font-display font-800 text-8xl text-lime/20 mb-4">404</span>
      <h1 className="font-display font-700 text-3xl text-cream mb-3">
        Page not found
      </h1>
      <p className="font-body text-cream-muted mb-8 max-w-sm">
        This page doesn't exist or was moved. Let's get you back on track.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-5 py-3 rounded-xl bg-lime text-bg font-body font-600 text-sm hover:bg-lime-dim transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/portfolio"
          className="px-5 py-3 rounded-xl border border-border text-cream font-body font-500 text-sm hover:border-lime/30 hover:text-lime transition-colors"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  );
}
