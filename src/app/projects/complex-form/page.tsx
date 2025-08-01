
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  gender: z.enum(['male', 'female'], { required_error: 'Please select a gender.' }),
  sport: z.string({ required_error: 'Please select a sport.' }),
  file: z.any().refine(files => files?.length === 1, 'File is required.'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a date in YYYY-MM-DD format.'),
});

export default function ComplexFormProjectPage() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
        title: 'Form Submitted!',
        description: 'Your data has been successfully recorded.',
        });
        form.reset();
    }

  return (
    <div className="bg-background">
      <header className="border-b sticky top-0 bg-background/95 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <h2 className="font-headline text-2xl font-bold">Complex Form</h2>
            <Button asChild variant="outline">
              <Link href="/projects">
                <ArrowLeft className="mr-2" />
                Back to Projects
              </Link>
            </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Complex Form Submission</CardTitle>
                    <CardDescription>Automate filling out and submitting this form.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                <FormLabel>Gender</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                        <RadioGroupItem value="male" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Male</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                        <RadioGroupItem value="female" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Female</FormLabel>
                                    </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="sport"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Favourite Sport</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a sport" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="soccer">Soccer</SelectItem>
                                    <SelectItem value="basketball">Basketball</SelectItem>
                                    <SelectItem value="tennis">Tennis</SelectItem>
                                    <SelectItem value="cricket">Cricket</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="file"
                            render={({ field: { value, onChange, ...fieldProps } }) => (
                                <FormItem>
                                <FormLabel>Upload a file</FormLabel>
                                <FormControl>
                                     <Input
                                        {...fieldProps}
                                        type="file"
                                        onChange={(event) => onChange(event.target.files)}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Pick a date</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="YYYY-MM-DD" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Please enter a date in YYYY-MM-DD format.
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
