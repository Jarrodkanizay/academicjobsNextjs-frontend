'use server';

import { User } from '@prisma/client';
import prisma from '@/prisma/client';

import * as z from 'zod';

import * as bcrypt from 'bcrypt';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { RegisterSchema } from '@/app/schemas/schemas';

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    console.log('registerUser action1', values);
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
      return Promise.reject('Invalid fields!');
    }
 const { username, email, password } = validatedFields.data;
    console.log('registerUser action2', values);
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return Promise.reject(new Error('Email already exists'));
    }

    await prisma.user.create({
      data: {
        name: username,
        email,
        hashedPassword: hashedPassword,
        userRole: 'JOBSEEKER',
      },
    });

    // Login the user after successful registration
    // await signIn('credentials', {
    //   email,
    //   password,
    //   redirect: false, // Set to true if you want NextAuth.js to handle redirection
    // });

    return { success: '200' };
  } catch (error) {
    return Promise.reject(error);
  }
};
