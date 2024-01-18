'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
import { toast } from '@/components/ui/use-toast';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { jobElephantContacts } from '@/data/jobElephantContacts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <main className="content-grid">
      <h2 className="underline-full mt-4 mb-8">Job Elephant Post Form</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-[300px]"
        >
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="job-elephant-contact">Name (Job Elephant)</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {jobElephantContacts.map((contact, index) => (
                  <SelectItem key={index} value={contact}>
                    {contact}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">
              Job Elephant Client (ie: Utah University)
            </Label>
            <Input type="text" id="job-link" placeholder="Job Link" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Job Link URL (ie: apptrkr.com/…)</Label>
            <Input type="text" id="job-link-url" placeholder="Job Link" />
          </div>

          <div className="grid w-full gap-2">
            <Label htmlFor="message">Notes</Label>
            <Textarea placeholder="Type your message here." />
          </div>

          {/* <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Job Post Document</Label>
            <Input id="picture" type="file" />
          </div> */}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}
