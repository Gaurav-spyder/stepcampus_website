
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Form Submitted',
};

export default function FormSuccessPage() {
  return (
    <div className="container py-12 text-center flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            Form Submitted Successfully!
        </h1>
        <p className="text-muted-foreground md:text-lg mb-8 max-w-md">
            Your data has been recorded.
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
