
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Payment Successful',
};

export default function PaymentSuccessPage() {
  return (
    <div className="container py-12 text-center flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            Payment Successful!
        </h1>
        <p className="text-muted-foreground md:text-lg mb-8 max-w-md">
            Your order has been placed. Thank you for your purchase!
        </p>
        <Button asChild>
            <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>
        </Button>
    </div>
  );
}
