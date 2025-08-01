import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';

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
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
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
