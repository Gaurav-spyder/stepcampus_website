

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 'login-flow',
    title: 'E-commerce Login Flow Automation',
    description: 'Automate the user login and validation process for a mock e-commerce site.',
    testCases: [
      'Verify successful login with valid credentials.',
      'Verify error message for invalid username or password.',
      'Verify "Forgot Password" link functionality.',
      'Verify that user is redirected to the dashboard after login.',
    ],
    href: '/projects/ecommerce-login',
  },
  {
    id: 'broken-links',
    title: 'Broken Link Checker',
    description: 'Create a script that crawls a website and reports any broken links (404 errors).',
    testCases: [
      'Crawl all `<a>` tags on the homepage.',
      'Send an HTTP request to each link\'s href.',
      'Log links that return a status code of 404 or higher.',
      'Output the results to a CSV or text file.',
    ],
    href: '/projects/broken-links',
  },
  {
    id: 'form-submission',
    title: 'Complex Form Submission',
    description: 'Automate filling out and submitting a form with various field types.',
    testCases: [
      'Fill all text inputs with valid data.',
      'Select options from dropdowns.',
      'Check radio buttons and checkboxes.',
      'Upload a file and pick a date.',
    ],
    href: '/projects/complex-form',
  },
  {
    id: 'shopping-cart',
    title: 'Shopping Cart Automation',
    description: 'Automate the process of adding items to a shopping cart and proceeding to checkout.',
    testCases: [
      'Search for a product.',
      'Add the product to the cart.',
      'Verify the cart count updates correctly.',
      'Update item quantity in the cart.',
    ],
    href: '/projects/shopping-cart',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Real-World Projects
        </h1>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
          Apply your knowledge to these practical automation scenarios.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <h4 className="font-semibold">Test Case Ideas:</h4>
                <ul className="space-y-2">
                  {project.testCases.map((tc, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{tc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="outline" className="w-full">
                    <Link href={project.href}>View Project</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
