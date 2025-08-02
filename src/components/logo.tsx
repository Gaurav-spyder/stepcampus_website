
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
        <text
            x="24"
            y="27"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="10"
            fontWeight="bold"
            fill="#0F172A"
            textAnchor="middle"
            dominantBaseline="middle"
        >
            StepCampus
        </text>
      </svg>
      <span className="text-xl font-headline font-bold text-foreground">
        StepCampus
      </span>
    </Link>
  );
}
