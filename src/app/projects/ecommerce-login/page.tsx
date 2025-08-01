import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function EcommerceProjectPage() {
  return (
    <div className="bg-background">
      <header className="border-b sticky top-0 bg-background/95 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/projects" className="font-headline text-2xl font-bold">
            ShopCo
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            E-commerce Login
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            This is a practice page. Use the "Login" button to test your automation scripts.
          </p>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} ShopCo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
