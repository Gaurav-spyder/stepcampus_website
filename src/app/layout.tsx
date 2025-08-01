
'use client'

import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>StepCampus - Practice Automation Testing Online!</title>
        <meta name="description" content="A responsive and clean Test Automation Learning Platform Website using Next.js and Tailwind CSS for QA testers and automation learners to practice UI components and read tutorials." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        {isClient && <div className="relative flex min-h-screen flex-col">
          <Header key={pathname} />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>}
        <Toaster />
      </body>
    </html>
  );
}
