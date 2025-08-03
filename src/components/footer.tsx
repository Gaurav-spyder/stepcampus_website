
import { Github, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';


const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
    </svg>
  );

export function Footer() {
  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Your space to practice and master test automation.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="font-headline font-semibold">Quick Links</h4>
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/playground"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            Playground
          </Link>
          <Link
            href="/tutorials"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            Tutorials
          </Link>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            Projects
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="font-headline font-semibold">Contact</h4>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            Contact Us
          </Link>
          <div className="flex items-center gap-4 pt-2">
            <Link href="https://www.linkedin.com/in/gauravgupta1998/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="https://www.youtube.com/@stepcampus" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="https://github.com/Gaurav-spyder" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
             <Link href="https://t.me/stepcampus" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <TelegramIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
             </Link>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex items-center justify-center py-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} StepCampus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
