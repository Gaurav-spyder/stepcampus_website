
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
       <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="22" fill="#FFD700" />
        <path
          d="M12 28L24 22L36 28L24 34L12 28Z"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 21V28"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 16V22"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 25L12 28"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-2xl font-headline font-bold text-foreground">
        StepCampus
      </span>
    </Link>
  );
}
