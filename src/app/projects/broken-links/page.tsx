
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Link as LinkIcon, Link2Off, ArrowLeft } from 'lucide-react';

export default function BrokenLinksProjectPage() {
  return (
    <div className="bg-background">
      <header className="border-b sticky top-0 bg-background/95 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <h2 className="font-headline text-2xl font-bold">Broken Link Checker</h2>
            <Button asChild variant="outline">
              <Link href="/projects">
                <ArrowLeft className="mr-2" />
                Back to Projects
              </Link>
            </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Test Your Broken Link Script
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            This page contains a mix of valid, broken, and external links. Your script should be able to identify which ones are which.
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-4">
            <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2"><LinkIcon className="text-green-500" /> Valid Links</h3>
                <ul className="space-y-3 list-disc list-inside">
                    <li><a href="/" className="text-primary hover:underline">Home Page</a></li>
                    <li><a href="/playground" className="text-primary hover:underline">Playground</a></li>
                    <li><a href="/contact" className="text-primary hover:underline">Contact Page</a></li>
                </ul>
            </div>
            <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2"><Link2Off className="text-red-500"/> Broken Links (404 Not Found)</h3>
                 <ul className="space-y-3 list-disc list-inside">
                    <li><a href="/this-page-does-not-exist" className="text-primary hover:underline">Non-existent Page</a></li>
                    <li><a href="/projects/invalid-project" className="text-primary hover:underline">Invalid Project</a></li>
                </ul>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2"><LinkIcon className="text-blue-500" /> External Links</h3>
                 <ul className="space-y-3 list-disc list-inside">
                    <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google</a></li>
                    <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/404_error" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wikipedia 404 Page</a></li>
                </ul>
            </div>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} StepCampus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
