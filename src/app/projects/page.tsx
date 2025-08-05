
import type { Metadata } from 'next';
import { ProjectsClientPage } from '@/components/projects-client-page';

export const metadata: Metadata = {
  title: 'Test Automation Projects | StepCampus',
  description: 'Apply your automation skills to real-world projects. Practice with our e-commerce login, broken link checker, complex form submission, and shopping cart scenarios.',
  keywords: ['test automation projects', 'Selenium projects', 'Playwright projects', 'QA practice projects', 'automation portfolio'],
    alternates: {
        canonical: '/projects',
    },
};

export default function ProjectsPage() {
  return <ProjectsClientPage />;
}
