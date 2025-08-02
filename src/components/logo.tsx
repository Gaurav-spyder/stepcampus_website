
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <circle cx="24" cy="24" r="22" fill="#FFD700" />
        <path
          d="M14 26L24 32L34 26V20L24 14L14 20V26Z"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M30 18L36 21V27L30 30"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 38V32"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34 20L40 23"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-headline font-bold text-foreground">
        StepCampus
      </span>
    </Link>
  );
}
