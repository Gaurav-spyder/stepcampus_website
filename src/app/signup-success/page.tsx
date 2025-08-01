import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Signup Successful',
};

export default function SignupSuccessPage() {
  return (
    <div className="container py-12 text-center flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            Signup Successful!
        </h1>
        <p className="text-muted-foreground md:text-lg mb-8 max-w-md">
            Your account has been created. You can now log in with the credentials you provided.
        </p>
        <Button asChild>
            <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Go to Login
            </Link>
        </Button>
    </div>
  );
}
