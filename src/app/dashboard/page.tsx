import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <div className="container py-12 text-center">
      <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
        Login Successful
      </h1>
    </div>
  );
}
