import { TestTube2 } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <TestTube2 className="h-7 w-7 text-primary" />
      <span className="text-xl font-headline font-bold text-foreground">
        TestSpace
      </span>
    </Link>
  );
}
