
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/playground', label: 'Playground' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function HeaderNav({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();

  if (isMobile) {
    return (
      <nav className="grid gap-4">
        {navLinks.map((link) => (
          <Link
            key={`${link.href}-${link.label}-mobile`}
            href={link.href}
            className={cn(
              'rounded-md px-3 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground',
              pathname === link.href
                ? 'bg-accent text-accent-foreground'
                : 'text-foreground'
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
      {navLinks.map((link) => (
        <Link
          key={`${link.href}-${link.label}`}
          href={link.href}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === link.href
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
