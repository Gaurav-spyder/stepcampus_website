
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Image src="/logo.png" alt="StepCampus Logo" width={48} height={48} />
      <span className="text-2xl font-headline font-bold text-foreground">
        StepCampus
      </span>
    </Link>
  );
}
