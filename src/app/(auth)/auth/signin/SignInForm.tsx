'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Button } from '@/shadcn/ui/button';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/shadcn/ui/form';
import { Input } from '@/shadcn/ui/input';
import { Form } from '@/shadcn/ui/form';
import GoogleSignInButton from './GoogleSignInButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Card, CardDescription, CardHeader, CardTitle } from '@/shadcn/ui/card';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FormSchema } from '@/app/schemas/schemas';
import { useState } from 'react';

interface Props {
  callbackUrl?: string;
}

type InputType = z.infer<typeof FormSchema>;

const SignInForm = (props: Props) => {
  let callbackUrl = props.callbackUrl ? props.callbackUrl : '/';
  const router = useRouter();
  const [authError, setAuthError] = useState<string | null>(null);
  const form = useForm<InputType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error && result.status === 401) {
      setAuthError(result.error);
      return;
    }

    if (result?.error) {
      setAuthError(result.error);
      return;
    }

    setAuthError(null);
    router.push(callbackUrl);
  };

  return (
    <div className="flex items-center justify-center mt-16">
      <Card className="p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <>
                        <Input
                          className={authError ? 'border-red-500' : ''}
                          placeholder="mail@example.com"
                          {...field}
                        />
                        {authError && (
                          <p className="text-red-500 text-sm mt-1">
                            {authError}
                          </p>
                        )}
                      </>
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
                      <>
                        <Input
                          type="password"
                          className={authError ? 'border-red-500' : ''}
                          placeholder="Enter your password"
                          {...field}
                        />
                        {authError && (
                          <p className="text-red-500 text-sm mt-1">
                            {authError}
                          </p>
                        )}
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full mt-6 " type="submit">
              Sign in
            </Button>
          </form>
          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <GoogleSignInButton callbackUrl={callbackUrl}>
            Sign in with Google
          </GoogleSignInButton>
          <p className="text-center text-sm text-gray-600 mt-2">
            If you don&apos;t have an account, please&nbsp;
            <Link className="text-blue-500 hover:underline" href="/auth/signup">
              Sign up
            </Link>
          </p>
          <p className="text-center text-sm text-gray-600 mt-2">
            Having trouble signing in? <Link className="text-blue-500 hover:underline" href="/auth/forgot-password">Reset Password.</Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default SignInForm;
