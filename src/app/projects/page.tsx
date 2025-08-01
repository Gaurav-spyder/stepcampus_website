import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
      'Test login form with empty fields.',
    ],
  },
  {
    id: 'broken-links',
    title: 'Broken Link Checker',
    description: 'Create a script that crawls a website and reports any broken links (404 errors).',
    testCases: [
      'Crawl all `<a>` tags on the homepage.',
      'Send an HTTP request to each link\'s href.',
      'Log links that return a status code of 404 or higher.',
      'Handle network timeouts gracefully.',
      'Output the results to a CSV or text file.',
    ],
  },
  {
    id: 'form-submission',
    title: 'Complex Form Submission',
    description: 'Automate filling out and submitting a form with various field types.',
    testCases: [
      'Fill all text inputs with valid data.',
      'Select options from dropdowns.',
      'Check radio buttons and checkboxes.',
      'Upload a file using the file input.',
      'Pick a date from the date picker.',
      'Submit the form and verify the success message.',
    ],
  },
  {
    id: 'shopping-cart',
    title: 'Shopping Cart Automation',
    description: 'Automate the process of adding items to a shopping cart and proceeding to checkout.',
    testCases: [
      'Search for a product.',
      'Add the product to the cart from the search results page.',
      'Navigate to the product details page and add to cart.',
      'Verify the cart count updates correctly.',
      'Navigate to the cart page and verify item details (name, price, quantity).',
      'Update item quantity in the cart.',
      'Remove an item from the cart.',
    ],
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

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {projects.map((project) => (
            <AccordionItem key={project.id} value={project.id}>
              <AccordionTrigger className="font-headline text-lg">
                {project.title}
              </AccordionTrigger>
              <AccordionContent className="space-y-4 px-2">
                <p className="text-muted-foreground">{project.description}</p>
                <h4 className="font-semibold">Sample Test Case Ideas:</h4>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  {project.testCases.map((tc, index) => (
                    <li key={index}>{tc}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
