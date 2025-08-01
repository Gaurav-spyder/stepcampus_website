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
import React, { useEffect, useState } from 'react';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

const signupSchema = z.object({
  username: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
  captcha: z.string().nonempty({ message: 'Please solve the captcha.' }),
});

type AuthFormProps = {
  type: 'login' | 'signup';
};

export function AuthForm({ type }: AuthFormProps) {
  const isLogin = type === 'login';
  const formSchema = isLogin ? loginSchema : signupSchema;
  const { toast } = useToast();
  
  const [captcha, setCaptcha] = useState<{ num1: number, num2: number, operator: string, answer: number } | null>(null);

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
            // ensure result is not negative
            if (num1 < num2) {
                answer = num2 - num1;
                setCaptcha({ num1: num2, num2: num1, operator, answer });
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
    setCaptcha({ num1, num2, operator, answer });
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
      : { username: '', email: '', password: '', captcha: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (isLogin) {
        const { email, password } = values as z.infer<typeof loginSchema>;
        if (email === 'hi@stepcampus.com' && password === 'Stepcampus@123') {
             toast({
                title: 'Login Successful!',
                description: 'Welcome back!',
             });
             form.reset();
        } else {
            form.setError('email', { type: 'manual', message: 'Invalid email or password.' });
            form.setError('password', { type: 'manual', message: 'Invalid email or password.' });
        }
    } else {
        const { captcha: captchaAnswer } = values as z.infer<typeof signupSchema>;
        if (captcha && parseInt(captchaAnswer, 10) !== captcha.answer) {
            form.setError('captcha', { type: 'manual', message: 'Incorrect captcha answer. Try again.' });
            generateCaptcha();
            return;
        }
        console.log(values);
        toast({
            title: 'Signup Successful!',
            description: 'You can now log in with your credentials.',
        });
        form.reset();
        generateCaptcha();
    }
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
          {isLogin && (
            <Alert className="mb-4">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Demo Credentials</AlertTitle>
              <AlertDescription className="text-xs">
                <p>Email: <span className="font-mono">hi@stepcampus.com</span></p>
                <p>Password: <span className="font-mono">Stepcampus@123</span></p>
              </AlertDescription>
            </Alert>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {!isLogin && (
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Your username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="m@example.com"
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
              )}
              <Button type="submit" className="w-full">
                {isLogin ? 'Login' : 'Sign Up'}
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
