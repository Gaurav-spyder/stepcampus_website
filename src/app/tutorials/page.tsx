import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const tutorials = [
  {
    title: 'Selenium Full Course',
    description: 'A comprehensive playlist covering Selenium from basics to advanced topics.',
    href: 'https://youtube.com/playlist?list=PLfYPqIerSaIUX-O5WP5CSn2KtQzTPhMS8&si=rHJAST0Eb5IcmVzn',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'automation testing',
  },
];

export default function TutorialsPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Tutorials
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Browse our guides to learn selenium.
        </p>
      </div>

      <div className="mx-auto grid max-w-lg gap-8">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.title} className="overflow-hidden">
             <Link href={tutorial.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={tutorial.imageUrl}
                alt={tutorial.title}
                width={600}
                height={400}
                className="w-full object-cover aspect-[3/2]"
                data-ai-hint={tutorial.imageHint}
              />
            </Link>
            <CardHeader>
              <CardTitle className="font-headline">{tutorial.title}</CardTitle>
              <CardDescription>{tutorial.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={tutorial.href} target="_blank" rel="noopener noreferrer">
                  Watch on YouTube
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
