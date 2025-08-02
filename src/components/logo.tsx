import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <circle cx="50" cy="50" r="48" fill="#FFD700" stroke="#000000" strokeWidth="2" />
        <path d="M20 40 L50 30 L80 40 L50 50 Z" fill="#4A4A4A"/>
        <path d="M45 50 L55 50 L55 55 L45 55 Z" fill="#333333"/>
        <rect x="48" y="30" width="4" height="5" fill="#4A4A4A" />
        <path d="M78 40 L78 55 L75 53" stroke="#FFC107" strokeWidth="2" fill="none" />
        <text x="50" y="68" fontFamily="Arial, sans-serif" fontSize="16" fill="#000000" textAnchor="middle" fontWeight="bold">Step</text>
        <text x="50" y="85" fontFamily="Arial, sans-serif" fontSize="16" fill="#000000" textAnchor="middle" fontWeight="bold">Campus</text>
      </svg>
      <span className="text-xl font-headline font-bold text-foreground">
        StepCampus
      </span>
    </Link>
  );
}
