import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <div className="container py-12">
      <div className="relative">
        <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
                Login Successful
            </h1>
        </div>
        <div className="absolute top-0 right-0">
            <Button asChild>
                <Link href="/login">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Login
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
