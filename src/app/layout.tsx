
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stepcampus.in'),
  title: {
    default: 'StepCampus - Practice Automation Testing Online!',
    template: '%s | StepCampus',
  },
  description: 'A responsive and clean Test Automation Learning Platform Website using Next.js and Tailwind CSS for QA testers and automation learners to practice UI components and read tutorials.',
  keywords: ['Test Automation', 'QA', 'Selenium', 'Appium', 'Playwright', 'Cypress', 'Automation Testing', 'Software Testing', 'QA Engineer', 'Interactive Learning'],
  openGraph: {
    title: 'StepCampus - Practice Automation Testing Online!',
    description: 'Sharpen your automation skills with our interactive playground, comprehensive tutorials, and real-world projects.',
    url: 'https://www.stepcampus.in',
    siteName: 'StepCampus',
    images: [
      {
        url: 'https://www.stepcampus.in/logo.svg', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'StepCampus Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StepCampus - Practice Automation Testing Online!',
    description: 'Sharpen your automation skills with our interactive playground, comprehensive tutorials, and real-world projects.',
    images: ['https://www.stepcampus.in/logo.svg'], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased dark'
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
