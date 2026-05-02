import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  onClick?: () => void;
};

export function BrandMark({ compact = false, onClick }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      onClick={onClick}
      aria-label="HyberTec home"
    >
      <div
        className={
          compact
            ? "flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
            : "flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
        }
      >
        <Image
          src="/hybertec-logo-centered-bg-rm.png"
          alt="HyberTec logo"
          width={compact ? 28 : 30}
          height={compact ? 28 : 30}
          className="h-auto w-auto max-h-[28px] max-w-[28px] object-contain"
          priority
        />
      </div>

      <div className="leading-none">
        <span
          className={
            compact
              ? "block font-display text-lg font-bold tracking-tight text-cream"
              : "block font-display text-xl font-bold tracking-tight text-cream"
          }
        >
          HyberTec
        </span>
        <span className="block pt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-cream-muted">
          Software and web services
        </span>
      </div>
    </Link>
  );
}
