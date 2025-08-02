
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M14.5 2H9.5L9 7H15L14.5 2Z" />
        <path d="M12 12H9.5L8.5 7H7" />
        <path d="M12 12H14.5L15.5 7H17" />
        <path d="M4 12H20" />
        <path d="M4 17h16" />
        <path d="M9 22.0002L12 17.0002L15 22.0002" />
        <path d="M7 12V7" />
        <path d="M17 12V7" />
      </svg>
      <span className="text-xl font-headline font-bold text-foreground">
        StepCampus
      </span>
    </Link>
  );
}
