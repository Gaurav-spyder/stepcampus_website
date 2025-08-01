import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const tools = [
  {
    id: 'selenium',
    name: 'Selenium',
    description: 'The classic browser automation tool with multi-language support.',
    tutorials: [
      { title: 'Getting Started', href: '#' },
      { title: 'Writing Your First Script', href: '#' },
      { title: 'Locators (ID, Name, XPath, CSS)', href: '#' },
      { title: 'Waits (Implicit, Explicit, Fluent)', href: '#' },
      { title: 'Handling Dropdowns & Alerts', href: '#' },
      { title: 'Page Object Model (POM)', href: '#' },
    ],
  },
  {
    id: 'cypress',
    name: 'Cypress',
    description: 'A modern, all-in-one testing framework for anything that runs in a browser.',
    tutorials: [
      { title: 'Installation & Setup', href: '#' },
      { title: 'Your First Test', href: '#' },
      { title: 'Selectors & Traversal', href: '#' },
      { title: 'Assertions', href: '#' },
      { title: 'Intercepting Network Requests', href: '#' },
      { title: 'Custom Commands', href: '#' },
    ],
  },
  {
    id: 'playwright',
    name: 'Playwright',
    description: 'A powerful framework for cross-browser automation by Microsoft.',
    tutorials: [
      { title: 'Introduction to Playwright', href: '#' },
      { title: 'Creating a New Project', href: '#' },
      { title: 'Locators and Auto-waiting', href: '#' },
      { title: 'Test Generator (Codegen)', href: '#' },
      { title: 'API Testing', href: '#' },
      { title: 'Trace Viewer', href: '#' },
    ],
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
          Browse our guides to learn the most popular test automation frameworks.
        </p>
      </div>

      <div className="space-y-12">
        {tools.map((tool) => (
          <section key={tool.id} id={tool.id} className="scroll-mt-20">
            <div className="mb-6">
              <h2 className="font-headline text-3xl font-bold">{tool.name}</h2>
              <p className="text-muted-foreground">{tool.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tool.tutorials.map((tutorial) => (
                <Card key={tutorial.title}>
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">{tutorial.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={tutorial.href}>Read Guide</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
