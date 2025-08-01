import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7"
      >
        <path
          d="M20.71 19.43L17.5 14H6.5L3.29 19.43C2.92 20.01 3.16 20.76 3.74 21.13C4.32 21.5 5.07 21.26 5.45 20.68L8.5 15H15.5L18.55 20.68C18.93 21.26 19.68 21.5 20.26 21.13C20.84 20.76 21.08 20.01 20.71 19.43Z"
          fill="currentColor"
          className="text-primary/30"
        />
        <path
          d="M16 3H8C7.45 3 7 3.45 7 4V14H17V4C17 3.45 16.55 3 16 3Z"
          fill="currentColor"
          className="text-primary"
        />
      </svg>
      <span className="text-xl font-headline font-bold text-foreground">
        StepCampus
      </span>
    </Link>
  );
}
