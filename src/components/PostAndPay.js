'use client';
import { useState, useEffect } from 'react';
import InputBlock from '@/components/forms/InputBlock';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Speedo from '@/components/icons/Speedo';
import Tiptap from './Tiptap';

const stripeLink = {
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
const JobPostForm = ({ product }) => {
  const [jobURLLink, setJobURLLink] = useState(false);
  const [organisationName, setOrganisationName] = useState('');
  const handleInputChange = (event) => {
    setOrganisationName(event.target.value);
  };

  const region = product.currency;

  const handleContentChange = (reason) => {
    setValue('06_JobPost', reason);
  };

  const [regionSelected, setRegion] = useState(region);
  const [standardMode, setStandardMode] = useState(true);
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
    const selectedOption = event.target.options[event.target.selectedIndex];
    const selectedRegion = selectedOption.text;
    setRegion(selectedRegion);
  };
  let newContact = false;
  let partnerName = 'AcademicJobs';
  let partnerImage = '/partners/post-a-job.png';
  let institutionName = `Institution Name (ie: Harvard University)`;
  let urlExample = `uni-name.edu/job-posting-url`;
  useEffect(() => {
    //alert(partnerName)
    if (partnerName === '' || partnerName === 'AcademicJobs') {
      setStandardMode(true);
    } else {
      setStandardMode(false);
    }
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
    let emailData = {
        ...data,
        '00_formSource': `WOO HOO, ring the bell, WE JUST GOT ANOTHER JOB LISTING from the ${partnerName} Post a Job Page`,
    };

    if (data.paymentMethod === 'invoice') {
        try {
            const response = await BaseApi.post('/invoices/create', {
                product: { id: product.xeroId, description: `${product.description} - ${product.currency}`, price: product.price },
                customerDetails: {
                    name: data['01_First_Name'] + ' ' + data['01_Last_Name'],
                    email: data['02_Email'],
                    address: data['01_Organisation_Name'],
                },
                currencyCode: product.currency,
                invoiceDetails: {
                    address: {
                        line1: data['address_line1'],
                        line2: data['address_line2'],
                        city: data['city'],
                        region: data['region'],
                        postalCode: data['postalCode'],
                        country: data['country'],
                    },
                    reference: data['08_Invoice_Reference'],
                },
            });

            if (response.status === 200) {
                emailData['Invoice sent'] = 'True';
                emailData['00_formSource'] += ' (Invoice Sent)';
            } else {
                throw new Error('Failed to create invoice');
            }
          } catch (error) {
            console.error('Error during invoice creation:', error);
          
            let errorMessage = 'Unknown error occurred during invoice creation';
            let errorDetails = error.message;
          
            if (error.response && error.response.data) {
              errorMessage = error.response.data.error || errorMessage;
              errorDetails = error.response.data.details || errorDetails;
            }
          
            emailData['Invoice sent'] = 'False';
            emailData['Invoice error'] = errorDetails;
            emailData['00_formSource'] += ' (Invoice Error)';
            setError('server', {
                type: 'manual',
                message: errorMessage,
            });
          }
    }

    try {
        await mutation.mutateAsync(emailData);
    } catch (error) {
        console.error('Error during email sending:', error);
    }
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
      router.push(product.stripeLink);
    }
  } else {
    content = (
      <main className=" content-grid">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <form className=" " onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 justify-start">
                <div
                  className={`${newContact || standardMode ? 'show-form' : 'hide-form'
                    }`}
                >
                  <div className="grid w-full items-center gap-1.5">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Organization/Institution Name"
                      type="text"
                      field="01_Organisation_Name"
                      forceClass="text-black"
                      placeholder="Organization or Institution Name"
                      autoComplete="organization"
                      hidden={newContact || standardMode ? false : true}
                      required={true}
                    />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="grid w-full items-center">
                      <InputBlock
                        register={register}
                        errors={errors}
                        label="First Name"
                        type="text"
                        field="01_First_Name"
                        forceClass=" text-black"
                        placeholder="First Name"
                        autoComplete="given-name"
                        hidden={newContact || standardMode ? false : true}
                        required={newContact || standardMode ? true : false}
                      />
                    </div>
                    <div className="grid w-full items-center">
                      <InputBlock
                        register={register}
                        errors={errors}
                        label="Last Name"
                        type="text"
                        field="01_Last_Name"
                        forceClass=" text-black"
                        placeholder="Last Name"
                        autoComplete="family-name"
                        hidden={newContact || standardMode ? false : true}
                        required={newContact || standardMode ? true : false}
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5 mt-4">
                    <InputBlock
                      register={register}
                      errors={errors}
                      label="Email"
                      type="email"
                      field="02_Email"
                      forceClass=" text-black"
                      placeholder="email"
                      autoComplete="email"
                      hidden={newContact || standardMode ? false : true}
                      required={true}
                    />
                  </div>
                </div>
                <InputBlock
                  register={register}
                  errors={errors}
                  label={institutionName}
                  type="text"
                  field="03_Institution_Name"
                  forceClass=" text-black"
                  placeholder="Institution Name (Agents and Resellers Only)"
                  required={true}
                />
                {product.credits === 1 ? (
                  <div className="form-control">
                    <label className="cursor-pointer label justify-start">
                      <input
                        type="checkbox"
                        className="checkbox mr-2"
                        onChange={(e) => setJobURLLink(e.target.checked)}
                      />
                      <span className="label-text">
                        Would you prefer to provide a link to your job post
                        instead?
                      </span>
                    </label>
                  </div>
                ) : null}
                {product.credits === 1 ? (
                  jobURLLink ? (
                    <InputBlock
                      register={register}
                      errors={errors}
                      label={`Provide a link to your job and we will copy the job from there (ie: ${urlExample})`}
                      type="text"
                      field="04_Job_Link_URL"
                      forceClass=" text-black"
                      placeholder="Link to your job post"
                      required={false}
                    />
                  ) : (
                    <>
                      <label className="form-control ">
                        <span className="label-text text-xs pb-1">
                          Copy & Paste your job here, and AcademicJobs will take
                          care of the rest.
                        </span>
                        <Tiptap
                          content={content}
                          onChange={(newContent) =>
                            handleContentChange(newContent)
                          }
                        />
                      </label>
                    </>
                  )
                ) : null}
                {product.credits === 1 ? (
                  <label className="form-control">
                    <span className="label-text text-xs pb-1">
                      Notes or Special Instructions
                    </span>
                    <textarea
                      className="textarea textarea-bordered h-32 focus:outline-none focus:border-orange-500"
                      id="notes"
                      placeholder="Type your message here."
                      {...register('05_Notes')}
                    ></textarea>
                  </label>
                ) : null}
                <InputBlock
                  ID={product.id}
                  register={register}
                  errors={errors}
                  label={`Product`}
                  type="text"
                  field="06_Product"
                  forceClass="text-black"
                  placeholder=""
                  required={true}
                  defaultValue={`${product.name} - ${product.currency}${product.price}`}
                  hidden={true}
                />{' '}
                {paymentMethod === 'invoice' && (
                  <>
                    <label className="form-control">
                      <span className="label-text text-xs pb-1">
                        Invoice Address
                      </span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputBlock
                        register={register}
                        errors={errors}
                        label="Address Line 1"
                        type="text"
                        field="address_line1"
                        forceClass=" text-black"
                        placeholder="Address Line 1"
                        required={true} />
                      <InputBlock
                        register={register}
                        errors={errors}
                        label="Address Line 2"
                        type="text"
                        field="address_line2"
                        forceClass=" text-black"
                        placeholder="Address Line 2"
                        required={false} />

                      <InputBlock
                        register={register}
                        errors={errors}
                        label="City"
                        type="text"
                        field="city"
                        forceClass=" text-black"
                        placeholder="City"
                        required={true} />


                      <InputBlock
                        register={register}
                        errors={errors}
                        label="Region"
                        type="text"
                        field="region"
                        forceClass=" text-black"
                        placeholder="Region"
                        required={true} />

                      <InputBlock
                        register={register}
                        errors={errors}
                        label="Postal Code"
                        type="text"
                        field="postalCode"
                        forceClass=" text-black"
                        placeholder="Postal Code"
                        required={true} />

                      <InputBlock
                        register={register}
                        errors={errors}
                        label="Country"
                        type="text"
                        field="country"
                        forceClass=" text-black"
                        placeholder="Country"
                        required={true} />
                    </div><InputBlock
                      register={register}
                      errors={errors}
                      label="Invoice Reference (for your records)"
                      type="text"
                      field="08_Invoice_Reference"
                      forceClass=" text-black"
                      placeholder="Invoice Reference"
                      required={true} /></>
                )}
                <p className="m-0 text-xl">
                  Purchase <strong>{product.name}</strong> for{' '}
                  <strong className="text-emerald-600">
                    {product.currencySymbol}
                    {product.price}
                  </strong>{' '}
                  {product.currency}
                </p>
                {/* <p className="m-0">
                  {product.credits === -1
                    ? 'Unlimited credits will be added '
                    : `${product.credits} credit${
                        product.credits === 1 ? '' : 's'
                      } will be added `}
                  {organisationName !== '' ? (
                    <>
                      to <strong>{organisationName}</strong>
                    </>
                  ) : (
                    ''
                  )}
                </p> */}
                {/* <p>{product.description}</p> */}
                {/* <p>{product.credits}</p> */}
                {/* <p>{product.slug}</p> */}
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
                      onClick={() => { setPaymentMessage('Credit Card'); setPaymentMethod('Credit Card'); }}
                      className="radio radio-aj ml-2"
                    />
                  </label>
                  {product.credits > 0 ? (
                    <>
                      <label htmlFor="invoice" className="label cursor-pointer">
                        Invoice (Pay Later)
                        <input
                          type="radio"
                          id="invoice"
                          name="paymentMethod"
                          value="invoice"
                          {...register('paymentMethod')}
                          onClick={() => { setPaymentMessage('Invoice'); setPaymentMethod('invoice'); }}
                          className="radio radio-aj ml-2"
                        />
                      </label>
                    </>
                  ) : null}
                </div>
                <button className="btn btn-accent mt-4">
                  {product.credits < 0
                    ? 'Pay Now'
                    : 'Post & Pay via ' + paymentMessage}
                </button>{' '}
              </div>
            </form>
          </div>

          <div className="relative">
            <div className="flex">
              <Speedo size={80} />
              <h2 className="ml-4 mb-0">
                Academic Jobs is the fastest way to post a Job.{' '}
              </h2>
            </div>
            <div className="=absolute inset-0 flex justify-center items-center">
              <Image
                width={600}
                height={600}
                src={partnerImage}
                className="object-container"
                alt="Academic Jobs Quick Post Technology"
              />
            </div>
            {/* <div className="prose">
              <p className="mt-4">
                The average time to Post a Job and fill out a form on the major
                Job Seeking platforms is 9 min or more. With AcademicJobs we
                make your life easier and save you time by…
              </p>
              <ul>
                <li>
                  Reducing Job Posting times to seconds rather than minutes
                </li>
                <li>
                  We do the heavy lifting for you (just provide a link to the
                  post)
                </li>
                <li>
                  Our Rich Text editor is coming soon (just copy and paste)
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </main>
    );
  }
  return <>{content}</>;
};

export default JobPostForm;
