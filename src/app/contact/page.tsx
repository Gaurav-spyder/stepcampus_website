
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us - StepCampus',
  description: 'Get in touch with StepCampus for any questions, feedback, or support. We are here to help you with your test automation learning journey.',
  keywords: ['Contact StepCampus', 'StepCampus support', 'automation testing help', 'QA learning contact'],
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
  return <ContactForm />;
}
