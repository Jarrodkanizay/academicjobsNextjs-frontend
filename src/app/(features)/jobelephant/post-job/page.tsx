'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
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

const frameworks = [
  {
    value: 'Jessica White',
    label: 'Jessica White',
  },
  {
    value: 'Trista Nicholson',
    label: 'Trista Nicholson',
  },
  { value: 'Lauren ', label: 'Lauren ' },
  {
    value: 'Justin Baker',
    label: 'Justin Baker',
  },
  {
    value: 'Natasha Felix Partida',
    label: 'Natasha Felix Partida',
  },
  { value: 'Joe Grant', label: 'Joe Grant' },
  { value: 'Kim Hoang', label: 'Kim Hoang' },
  {
    value: 'Lewam Kebreab',
    label: 'Lewam Kebreab',
  },
  {
    value: 'Sawyer Kim',
    label: 'Sawyer Kim',
  },
  {
    value: 'Sarah Seagraves',
    label: 'Sarah Seagraves',
  },
  {
    value: 'Tyler Sheehan',
    label: 'Tyler Sheehan',
  },
  {
    value: 'Irene Silveira',
    label: 'Irene Silveira',
  },
  {
    value: 'Hiral Trivedi',
    label: 'Hiral Trivedi',
  },
  { value: 'Anna Felix', label: 'Anna Felix' },
];

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
          className="w-2/3 space-y-6"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="job-elephant-contact">Name (Job Elephant)</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : 'Select framework...'}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        name="job-elephant-contact"
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            value === framework.value
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
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
