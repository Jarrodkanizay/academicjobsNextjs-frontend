'use client';
import React, { watch } from 'react';
import countries from '@/data/CountryList.json';
import InputBlock2 from './InputBlock2';
import { useForm } from 'react-hook-form';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';
import FormSubmissionMessage from './FormSubmissionMessage';

const SubscribeForm = ({
  formName = 'Subscribe to Newsletter',
  buttonText = 'Subscribe',
  thankYouMessage = 'Thanks for subscribing to our newsletter!',
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      '00_Form_Name': formName,
    },
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return BaseApi.post('/sendemail', data);
    },
  });

  const onSubmit = async (data) => {
    //e.preventDefault();
    //alert()
    console.log('data', data);
    mutation.mutate(data);
  };

  const firstName = watch('01_First_Name');

  if (mutation.isLoading) {
    return (
      <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
        <div className="p-4 animate-pulse">
          <div className="w-1/4 pr-4">
            <div className="rounded-xl bg-gray-300 h-16 w-full">
              'Sending Email ...'
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (mutation.isError) {
    return (
      <FormSubmissionMessage
        status="error"
        message={mutation.error.message}
        firstName={firstName}
      />
    );
  }
  if (mutation.isSuccess) {
    return <h3 className="">{thankYouMessage}</h3>;
  }
  //   if (maxWidth === undefined) maxWidth = '800';
  return (
    <form className={``} onSubmit={handleSubmit(onSubmit)}>
      <div id="request-job-post" className="join w-full animate-pulse">
        {/* {errors[field] && (
          <span className="error">{errors[field].message}</span>
        )} */}

        <InputBlock2
          ID="email-input"
          name="email"
          register={register}
          errors={errors}
          tabIndex={1}
          type="email"
          field="01_Email"
          forceClass=""
          placeholder="Email"
          autoComplete="email"
          required={false}
          inputClass="input-bordered rounded-r-none"
        />
        <button
          type="submit"
          className="btn join-item bg-aj text-white rounded-r-full"
        >
          Email Full Job Post
        </button>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
      {/* First name */}
      {/* <InputBlock2
          register={register}
          errors={errors}
          tabIndex={1}
          type="text"
          ID="first-name-input"
          field="01_First_Name"
          forceClass=""
          placeholder="First Name"
          autoComplete="given-name"
          required={true}
          colSpan={2}
        /> */}
      {/* Last name */}
      {/* <InputBlock2
          register={register}
          errors={errors}
          tabIndex={2}
          type="text"
          ID="last-name-input"
          field="02_Last_Name"
          forceClass=""
          placeholder="Last Name"
          autoComplete="family-name"
          required={true}
          colSpan={2}
        /> */}
      {/* </div> */}
    </form>
  );
};
export default SubscribeForm;
