
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { HeaderNav } from './header-nav';

export function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>

        <HeaderNav />

        <div className="flex flex-1 items-center justify-between md:justify-end">
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                 <div className="flex flex-col gap-6 p-6">
                    <Logo />
                    <HeaderNav isMobile />
                 </div>
              </SheetContent>
            </Sheet>
            <div className="md:hidden">
                <Logo />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
