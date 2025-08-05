
import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
       <Image src="/logo.svg" width={40} height={40} alt="StepCampus" className="rounded-full" />
      <span className="text-xl font-headline font-bold text-foreground">
        StepCampus
      </span>
    </Link>
  );
}
