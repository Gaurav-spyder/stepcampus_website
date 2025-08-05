
import { AuthForm } from '@/components/auth-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up for StepCampus',
  description: 'Create a new account on StepCampus to start learning test automation with our interactive playground, tutorials, and real-world projects.',
    alternates: {
        canonical: '/signup',
    },
};

export default function SignupPage() {
  return <AuthForm type="signup" />;
}
