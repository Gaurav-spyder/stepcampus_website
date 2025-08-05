
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Bug, BookOpen, Code2 } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Bug className="h-10 w-10 text-primary" />,
    title: 'Interactive Playground',
    description: 'Practice with dozens of UI components like forms, tables, and popups.',
    href: '/playground',
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: 'In-Depth Tutorials',
    description: 'Learn Selenium, Appium, and API from scratch with our guides.',
    href: '/tutorials',
  },
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: 'Real-World Projects',
    description: 'Apply your skills to practical scenarios and build your portfolio.',
    href: '/projects',
  },
];

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                For QA Testers & Developers
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                The Ultimate Playground for Automation Testing
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Sharpen your automation skills with our interactive playground,
                comprehensive tutorials, and real-world projects. StepCampus is the best place for QA Testers and SDETs to practice their automation testing skills on real-world components.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/playground">Start Practicing</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/tutorials">View Tutorials</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                 <div className="absolute inset-0 -m-4 rounded-full bg-primary/10 blur-3xl"></div>
                  <Bug className="relative h-48 w-48 text-primary/80 lg:h-64 lg:w-64" strokeWidth={1}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-secondary py-20 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Everything You Need to Become an Automation Pro
            </h2>
             <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              StepCampus is the best place for QA Testers and SDETs to practice their automation testing skills on real-world components.
            </p>
          </div>
          <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  {feature.icon}
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground">{feature.description}</p>
                   <Button asChild variant="outline" className="w-full">
                     <Link href={feature.href}>Explore</Link>
                   </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
