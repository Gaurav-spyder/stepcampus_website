
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import React, { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { login, signup } from '@/app/actions';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

const signupSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
  captcha: z.string().nonempty({ message: 'Please solve the captcha.' }),
  captchaChallenge: z.string(),
});

type AuthFormProps = {
  type: 'login' | 'signup';
};

export function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === 'login';
  const formSchema = isLogin ? loginSchema : signupSchema;
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  
  const [captcha, setCaptcha] = useState<{ num1: number, num2: number, operator: string, challenge: string } | null>(null);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let answer;
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            if (num1 < num2) {
                answer = num2 - num1;
                const challenge = btoa(`${num2}${operator}${num1}=${answer}`);
                setCaptcha({ num1: num2, num2: num1, operator, challenge });
                return;
            }
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        default:
             answer = num1 + num2;
    }
    const challenge = btoa(`${num1}${operator}${num2}=${answer}`);
    setCaptcha({ num1, num2, operator, challenge });
  };
  
  useEffect(() => {
    if (!isLogin) {
      generateCaptcha();
    }
  }, [isLogin]);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: isLogin
      ? { email: '', password: '' }
      : { email: '', password: '', captcha: '', captchaChallenge: '' },
  });
  
  useEffect(() => {
    if (captcha) {
        form.setValue('captchaChallenge', captcha.challenge);
    }
  }, [captcha, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
        if (isLogin) {
            const result = await login(values as z.infer<typeof loginSchema>);
            if (result.success) {
                toast({
                    title: 'Login Successful!',
                    description: 'Welcome back! Redirecting to dashboard...',
                });
                form.reset();
                router.push('/dashboard');
            } else {
                form.setError('email', { type: 'manual', message: result.error });
                form.setError('password', { type: 'manual', message: result.error });
            }
        } else {
            const result = await signup(values as z.infer<typeof signupSchema>);
             if (result.success) {
                router.push('/signup-success');
            } else {
                if (result.field === 'captcha') {
                    form.setError('captcha', { type: 'manual', message: result.error });
                    generateCaptcha();
                } else {
                    form.setError('email', { type: 'manual', message: result.error });
                    form.setError('password', { type: 'manual', message: result.error });
                }
            }
        }
    });
  }

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center py-12">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">
            {isLogin ? 'Login' : 'Sign Up'}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? 'Enter your credentials to access your account.'
              : 'Create an account to get started.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Demo Credentials</AlertTitle>
              <AlertDescription className="text-xs">
                <p>Use this email and password.</p>
                <p>Email: <span className="font-mono">hi@stepcampus.in</span></p>
                <p>Password: <span className="font-mono">Stepcampus@123</span></p>
              </AlertDescription>
          </Alert>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="m@stepcampus.in"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               {!isLogin && captcha && (
                <>
                <FormField
                  control={form.control}
                  name="captcha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        What is {captcha.num1} {captcha.operator} {captcha.num2}?
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Your answer"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="captchaChallenge"
                  render={({ field }) => (
                    <FormItem>
                       <FormControl>
                        <Input type="hidden" {...field} />
                       </FormControl>
                    </FormItem>
                  )}
                />
                </>
              )}
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-sm">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <Link
                href="/signup"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Sign up
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Login
              </Link>
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

