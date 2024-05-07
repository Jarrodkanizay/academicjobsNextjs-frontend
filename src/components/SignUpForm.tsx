'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
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
import { Card, CardHeader, CardTitle } from '@/shadcn/ui/card';
import GoogleSignInButton from '../app/(auth)/auth/signin/GoogleSignInButton';
import { toast } from 'react-toastify';
import { registerUser } from '../app/(auth)/auth/signup/action';
import { useRouter } from 'next/navigation';
import { SignUpFormSchema } from '@/app/schemas/schemas';
import { signIn } from 'next-auth/react';
interface SignUpFormProps {
  callbackUrl?: string;
}
const SignUpForm = (props: SignUpFormProps) => {
  let callbackUrl = props.callbackUrl ? props.callbackUrl : '/';
  const router = useRouter();
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      // firstName: '',
      // lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const saveUser = async (data: z.infer<typeof SignUpFormSchema>) => {
    const { confirmPassword, ...user } = data;
    try {
      const result = await registerUser(user);
      console.log('SignUpForm data', data);
      console.log('SignUpForm user', user);
      if (result.success) {
        toast('successfully signed up');
        router.push('/auth/signin');
        console.log('result.success data', data);
        await signIn('credentials', {
          redirect: false,
          email: data.email,
          password: data.password,
        });
        router.push(callbackUrl);
      }
    } catch (error) {
      if (error instanceof Error && error.message === 'Email already exists') {
        toast.error('Email already exists!');
      } else {
        toast.error('Something went wrong!');
        console.error(error);
      }
    }
  };
  return (
    <div className="flex items-center justify-center">
      <Card className="px-10 pt-0 pb-5 bg-slate-50">
        <CardHeader className="pb-0">
          <CardTitle className="text-center">Academics Professionals</CardTitle>
          <h4 className="text-center pb-8">
            Be seen and get hired.
            <br />
            Create your free profile today.
          </h4>
          {/* <CardDescription className="flex justify-center">
            Sign in
          </CardDescription> */}
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(saveUser)} className="w-full">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} type="given-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} type="email" />
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
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Re-Enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full mt-6" type="submit">
              Sign up
            </Button>
          </form>
          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <GoogleSignInButton callbackUrl={callbackUrl}>
            Sign up with Google
          </GoogleSignInButton>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? please&nbsp;
            <Link className="text-blue-500 hover:underline" href="/auth/signin">
              Sign in
            </Link>
          </p>
        </Form>
      </Card>

    </div>
  );
};
export default SignUpForm;
