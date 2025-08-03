
'use server';

import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  captcha: z.string(),
  captchaChallenge: z.string(),
});

type ActionResult = {
    success: boolean;
    error?: string;
    field?: 'email' | 'password' | 'captcha';
}

export async function login(credentials: z.infer<typeof loginSchema>): Promise<ActionResult> {
  const validatedFields = loginSchema.safeParse(credentials);

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid fields.' };
  }

  const { email, password } = validatedFields.data;

  if (email === 'hi@stepcampus.in' && password === 'Stepcampus@123') {
    return { success: true };
  }

  return { success: false, error: 'Invalid email or password.' };
}

export async function signup(data: z.infer<typeof signupSchema>): Promise<ActionResult> {
    const validatedFields = signupSchema.safeParse(data);

    if (!validatedFields.success) {
        return { success: false, error: 'Invalid fields.' };
    }

    const { email, password, captcha, captchaChallenge } = validatedFields.data;

    if (email !== 'hi@stepcampus.in' || password !== 'Stepcampus@123') {
        return { success: false, error: 'Invalid email or password.', field: 'email' };
    }

    try {
        const decodedChallenge = atob(captchaChallenge);
        const [expression, expectedAnswer] = decodedChallenge.split('=');

        if (captcha !== expectedAnswer) {
             return { success: false, error: 'Incorrect captcha answer. Try again.', field: 'captcha' };
        }
    } catch (error) {
        return { success: false, error: 'Invalid captcha challenge.', field: 'captcha' };
    }
    
    return { success: true };
}
