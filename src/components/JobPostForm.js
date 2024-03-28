'use client';
import React, { useState, useEffect } from 'react';
import InputBlock from '@/components/forms/InputBlock';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { jobElephantContacts } from '@/data/jobElephantContacts';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Speedo from '@/components/icons/Speedo';
import Tiptap from './Tiptap';

const stripeLink = {
  JobElephant: 'https://buy.stripe.com/6oE3dSddS3Mc6Ry3ce',
  Australia: 'https://buy.stripe.com/dR6eWA6PuaaA7VC6ov',
  Asia: 'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=asia',
  Africa: 'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=africa',
  Canada: 'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=canada',
  Europe: 'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=europe',
  India: 'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=india',
  'South America':
    'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=south-america',
  'Middle East': 'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=middle-east',
  'New Zealand': 'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=new-zealand',
  'United Kingdom':
    'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=united-kingdom',
  USA: 'https://buy.stripe.com/4gw8ycc9ObeE2Bi6ot?region=usa',
};

const JobPostForm = ({ partner, region = 'USA' }) => {
  const [content1, setContent1] = useState('');
  const handleContentChange = (reason) => {
    //setContent(reason)
    setValue('06_JobPost', reason);
  };
  const [regionSelected, setRegion] = useState(region);
  const [standardMode, setStandardMode] = useState(true);
  const [newContact, setNewContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(
    'Which Region are you from?'
  );
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [paymentMessage, setPaymentMessage] = useState('Credit Card');
  useEffect(() => {
    console.log('Region', regionSelected);
  }, [regionSelected]); // This effect runs whenever `regionSelected` changes
  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
    // Get the selected option element
    const selectedOption = event.target.options[event.target.selectedIndex];
    // Get the text of the selected option
    const selectedRegion = selectedOption.text;
    setRegion(selectedRegion);
  };
  let avatarPath = '';
  let textColor = 'text-aj';
  let partnerName = 'Post My Job';
  let partnerLogo = '';
  let partnerImage = 'https://www.academicjobs.com/partners/post-a-job.jpg';
  let partnerPullDown = false;
  let institutionName = `Institution Name (ie: Harvard University)`;
  let urlExample = `uni-name.edu/job-posting-url`;

  useEffect(() => {
    //alert(partnerName)
    setStandardMode(true);
  }, [partnerName]);
  let content;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      paymentMethod: 'creditCard',
    },
  });
  const onSubmit = async (data) => {
    // e.preventDefault();
    // alert()
    console.log('==========data', data);
    mutation.mutate({
      ...data,
      '00_formSource': `WOO HOO, ring the bell, WE JUST GOT ANOTHER JOB LISTING from the ${partnerName} Post a Job Page`,
    });
  };
  const mutation = useMutation({
    mutationFn: async (data) => {
      return await BaseApi.post('/sendemail', data);
    },
  });
  if (mutation.isLoading) {
    return (
      <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
        <div className="p-4 animate-pulse">
          <div className="w-1/4 pr-4">
            <div className="rounded-xl bg-gray-300 h-16 w-full">
              'Sending Jobs ...'
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (mutation.isError) {
    return <div>An error occurred: {mutation.error.message}</div>;
  }
  if (mutation.isSuccess) {
    if (paymentMessage === 'Invoice') {
      router.push('/thank-you');
    }
    if (paymentMessage === 'Credit Card') {
      router.push(stripeLink[regionSelected]);
    }
  } else {
    content = (
      <main className="content-grid">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1
              className={`text-4xl font-bold mb-8 mt-8 underline-full text-[#3b5683]`}
            >
              {/* {partnerName}  */}
              Job Post Confirmation
            </h1>
            <form className=" " onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 justify-start">
                <div
                  className={`p-4 border border-sky-200 bg-sky-50 ${
                    newContact || standardMode ? 'show-form' : 'hide-form'
                  }`}
                >
                  <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="currency" className="label-text text-xs">
                      Region
                    </label>
                    <select
                      id="currency"
                      value={selectedCurrency}
                      onChange={handleChange}
                      name="currency"
                      className="select select-bordered w-full bg-white focus:outline-none focus:border-orange-500"
                      required
                    >
                      <option value="" selected>
                        Which Region are you from?
                      </option>
                      {Object.keys(stripeLink)
                        .filter((key) => key !== 'JobElephant')
                        .map((key) => (
                          <option key={key} value={stripeLink[key]}>
                            {key}
                          </option>
                        ))}
                    </select>

                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Organization Name (Employer or Recruiter)"
                      type="text"
                      field="01_Organisation_Name"
                      forceClass="py-3 text-black"
                      placeholder="Organization Name"
                      autoComplete="organization"
                      hidden={newContact || standardMode ? false : true}
                      required={true}
                      disabled={true}
                    />
                  </div>
                  <div className="flex w-full items-center gap-4">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Employer ID"
                      type="text"
                      field="Employer_ID"
                      forceClass="py-3 text-black"
                      placeholder="Employer ID"
                      hidden={newContact || standardMode ? false : true}
                      required={true}
                      disabled={true}
                    />
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Job ID"
                      type="text"
                      field="Job_ID"
                      forceClass="py-3 text-black"
                      placeholder="Job ID"
                      hidden={newContact || standardMode ? false : true}
                      required={true}
                      disabled={true}
                    />
                  </div>

                  <div className="grid w-full items-center gap-1.5">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="First Name"
                      type="text"
                      field="01_First_Name"
                      forceClass=" py-3 text-black"
                      placeholder="First Name"
                      autoComplete="given-name"
                      hidden={newContact || standardMode ? false : true}
                      required={newContact || standardMode ? true : false}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5 mt-4">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Last Name"
                      type="text"
                      field="01_Last_Name"
                      forceClass=" py-3 text-black"
                      placeholder="Last Name"
                      autoComplete="family-name"
                      hidden={newContact || standardMode ? false : true}
                      required={newContact || standardMode ? true : false}
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5 mt-4">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Email"
                      type="email"
                      field="02_Email"
                      forceClass=" py-3 text-black"
                      placeholder="email"
                      autoComplete="email"
                      hidden={newContact || standardMode ? false : true}
                      required={true}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <label htmlFor="creditCard" className="label cursor-pointer">
                    <strong className="mr-2">Payment method:</strong>Credit Card
                    (Pay Now)
                    <input
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="creditCard"
                      {...register('paymentMethod')}
                      onClick={() => setPaymentMessage('Credit Card')}
                      className="radio radio-aj ml-2"
                    />
                  </label>
                  <label htmlFor="invoice" className="label cursor-pointer">
                    Invoice (Pay Later)
                    <input
                      type="radio"
                      id="invoice"
                      name="paymentMethod"
                      value="invoice"
                      {...register('paymentMethod')}
                      onClick={() => setPaymentMessage('Invoice')}
                      className="radio radio-aj ml-2"
                    />
                  </label>
                </div>
                <button className="btn btn-accent mt-4">
                  Post & Pay via {paymentMessage}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
  return <>{content}</>;
};
export default JobPostForm;
