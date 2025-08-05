
import { AuthForm } from '@/components/auth-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login to Your Account',
  description: 'Login to access your StepCampus dashboard and continue your test automation practice.',
    alternates: {
        canonical: '/login',
    },
};

export default function LoginPage() {
  return <AuthForm type="login" />;
}
