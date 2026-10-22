import { cn } from "@/lib/utils";
import type { VocabularyIllustration } from "@/types/learning";

interface Props {
  name: VocabularyIllustration;
  className?: string;
}

export function VocabularyArt({ name, className }: Props) {
  const Art = art[name];
  return (
    <svg viewBox="0 0 200 200" className={cn("size-full", className)} aria-hidden="true">
      <Art />
    </svg>
  );
}

const art: Record<VocabularyIllustration, () => React.ReactElement> = {
  coffee: Coffee,
  cat: Cat,
  train: Train,
  sakura: Sakura,
  ramen: Ramen,
};

function Coffee() {
  return (
    <g>
      <defs>
        <linearGradient id="cup" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#ede9fe" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="160" rx="70" ry="14" fill="#ddd6fe" />
      <ellipse cx="100" cy="156" rx="58" ry="10" fill="#fff" />
      <path d="M52 92h96l-8 52a14 14 0 0 1-14 12H74a14 14 0 0 1-14-12Z" fill="url(#cup)" stroke="#c4b5fd" strokeWidth="2.5" />
      <path d="M146 102c16 0 22 8 22 17s-8 17-24 17" fill="none" stroke="#c4b5fd" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="100" cy="92" rx="48" ry="9" fill="#92400e" />
      <ellipse cx="96" cy="91" rx="16" ry="3.5" fill="#d6a76c" opacity="0.8" />
      <path d="M93 91c2-2 6-2 8 0" stroke="#f5deb3" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <g fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" opacity="0.7">
        <path className="animate-float" d="M82 72c-8-10 8-16 0-28" />
        <path className="animate-float [animation-delay:1s]" d="M100 70c-8-10 8-18 0-32" />
        <path className="animate-float [animation-delay:2s]" d="M118 72c-8-10 8-16 0-28" />
      </g>
      <circle cx="80" cy="122" r="3" fill="#1e1b4b" />
      <circle cx="120" cy="122" r="3" fill="#1e1b4b" />
      <path d="M93 128c4 4 10 4 14 0" stroke="#1e1b4b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="72" cy="130" r="5" fill="#fda4af" opacity="0.6" />
      <circle cx="128" cy="130" r="5" fill="#fda4af" opacity="0.6" />
    </g>
  );
}

function Cat() {
  return (
    <g>
      <ellipse cx="100" cy="168" rx="56" ry="10" fill="#ddd6fe" />
      <path d="M150 150c22-4 26-30 10-38" fill="none" stroke="#fdba74" strokeWidth="12" strokeLinecap="round" />
      <ellipse cx="100" cy="138" rx="50" ry="34" fill="#fdba74" />
      <path d="M58 70 66 32l28 26ZM142 70l-8-38-28 26Z" fill="#fdba74" />
      <path d="M66 62 70 42l14 14ZM134 62l-4-20-14 14Z" fill="#fda4af" />
      <circle cx="100" cy="88" r="46" fill="#fed7aa" />
      <path d="M86 46c4 8 4 14 0 20M100 44v22M114 46c-4 8-4 14 0 20" stroke="#fdba74" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="82" cy="88" rx="5" ry="7" fill="#1e1b4b" />
      <ellipse cx="118" cy="88" rx="5" ry="7" fill="#1e1b4b" />
      <circle cx="84" cy="85" r="1.8" fill="#fff" />
      <circle cx="120" cy="85" r="1.8" fill="#fff" />
      <path d="M96 100h8l-4 5Z" fill="#fb7185" />
      <path d="M100 105c-2 5-8 6-11 3M100 105c2 5 8 6 11 3" stroke="#1e1b4b" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <g stroke="#c2410c" strokeWidth="1.8" strokeLinecap="round" opacity="0.55">
        <path d="M70 100 48 96M70 106l-22 4M130 100l22-4M130 106l22 4" />
      </g>
      <circle cx="70" cy="104" r="6" fill="#fda4af" opacity="0.5" />
      <circle cx="130" cy="104" r="6" fill="#fda4af" opacity="0.5" />
      <ellipse cx="82" cy="166" rx="12" ry="7" fill="#fed7aa" />
      <ellipse cx="118" cy="166" rx="12" ry="7" fill="#fed7aa" />
    </g>
  );
}

function Train() {
  return (
    <g>
      <defs>
        <linearGradient id="train-body" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
      <path d="M40 176h120M52 188h96" stroke="#c4b5fd" strokeWidth="5" strokeLinecap="round" />
      <path d="M70 160 58 176M130 160l12 16" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" />
      <path d="M100 26c40 0 56 30 56 66v50a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V92c0-36 16-66 56-66Z" fill="url(#train-body)" stroke="#a5b4fc" strokeWidth="3" />
      <path d="M62 72c4-20 18-30 38-30s34 10 38 30l2 22H60Z" fill="#6366f1" />
      <path d="M70 70c3-12 14-18 30-18" stroke="#a5b4fc" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
      <rect x="44" y="112" width="112" height="9" fill="#8b5cf6" />
      <circle cx="70" cy="138" r="8" fill="#fde68a" />
      <circle cx="130" cy="138" r="8" fill="#fde68a" />
      <circle cx="70" cy="138" r="3.5" fill="#fff" />
      <circle cx="130" cy="138" r="3.5" fill="#fff" />
      <rect x="88" y="132" width="24" height="12" rx="6" fill="#c7d2fe" />
    </g>
  );
}

function Sakura() {
  const petal = "M0 0C-14 -14 -16 -36 0 -48C4 -44 8 -44 12 -48C22 -34 16 -14 0 0Z";
  return (
    <g>
      <path d="M30 178c30-30 50-60 70-80s40-30 70-34" stroke="#a16207" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.55" />
      <g transform="translate(100 96)">
        {[0, 72, 144, 216, 288].map((r) => (
          <path key={r} d={petal} transform={`rotate(${r})`} fill="#fbcfe8" stroke="#f9a8d4" strokeWidth="2" />
        ))}
        <circle r="10" fill="#f472b6" />
        {[0, 72, 144, 216, 288].map((r) => (
          <circle key={r} r="2.6" cx="0" cy="-18" transform={`rotate(${r + 36})`} fill="#be185d" />
        ))}
      </g>
      <g transform="translate(158 56) scale(0.42)">
        {[0, 72, 144, 216, 288].map((r) => (
          <path key={r} d={petal} transform={`rotate(${r})`} fill="#fce7f3" stroke="#f9a8d4" strokeWidth="3" />
        ))}
        <circle r="10" fill="#f472b6" />
      </g>
      <g transform="translate(44 150) scale(0.36)">
        {[0, 72, 144, 216, 288].map((r) => (
          <path key={r} d={petal} transform={`rotate(${r})`} fill="#fce7f3" stroke="#f9a8d4" strokeWidth="3" />
        ))}
        <circle r="10" fill="#f472b6" />
      </g>
      <path className="animate-float" d="M150 140c-6-6-6-14 0-18 6 4 6 12 0 18Z" fill="#fbcfe8" />
      <path className="animate-float [animation-delay:1.5s]" d="M40 70c-6-6-6-14 0-18 6 4 6 12 0 18Z" fill="#fbcfe8" />
    </g>
  );
}

function Ramen() {
  return (
    <g>
      <path d="M128 30 96 104M148 34l-38 72" stroke="#d97706" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="100" cy="104" rx="72" ry="14" fill="#fde68a" />
      <g fill="none" stroke="#facc15" strokeWidth="4" strokeLinecap="round">
        <path d="M44 104c8-6 14 6 22 0s14 6 22 0" />
        <path d="M100 106c8-6 14 6 22 0s14 6 22 0" />
      </g>
      <circle cx="72" cy="98" r="13" fill="#fff" />
      <circle cx="72" cy="98" r="6.5" fill="#fb923c" />
      <rect x="112" y="86" width="22" height="16" rx="3" fill="#166534" transform="rotate(-12 123 94)" />
      <circle cx="96" cy="96" r="7" fill="#fecdd3" stroke="#fb7185" strokeWidth="2" />
      <path d="M93 96a3 3 0 0 1 6 0" stroke="#fb7185" strokeWidth="1.6" fill="none" />
      <path d="M28 104h144c0 34-30 62-72 62s-72-28-72-62Z" fill="#8b5cf6" />
      <path d="M28 104h144c0 6-1 12-3 17H31c-2-5-3-11-3-17Z" fill="#7c3aed" />
      <path d="M60 136h80" stroke="#c4b5fd" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 12" />
      <ellipse cx="100" cy="172" rx="40" ry="6" fill="#ddd6fe" />
      <g fill="none" stroke="#c4b5fd" strokeWidth="3.5" strokeLinecap="round" opacity="0.8">
        <path className="animate-float" d="M70 76c-6-8 6-12 0-22" />
        <path className="animate-float [animation-delay:1.2s]" d="M100 74c-6-8 6-14 0-24" />
      </g>
    </g>
  );
}
