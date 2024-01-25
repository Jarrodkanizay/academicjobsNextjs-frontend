'use client';
import React, { watch } from 'react';
import countries from '@/data/CountryList.json';
import InputBlock2 from './InputBlock2';
import { useForm } from 'react-hook-form';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';
import FormSubmissionMessage from './FormSubmissionMessage';

const ContactUsForm = ({ maxWidth }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      '00_Form_Name': 'Contact Us Form Submission',
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
    return (
      <FormSubmissionMessage
        status="success"
        message="We appreciate you reaching out, a team member will be in touch with you shortly."
        firstName={firstName}
      />
    );
  }
  if (maxWidth === undefined) maxWidth = '800';
  return (
    <form
      className={`talent-pool mx-auto px-7 pt-4 pb-6 border-[1px] border-slate-500 bg-slate-50 rounded-2xl w-full lg:max-w-[${maxWidth}px] lg:min-w-[640px]`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="underline-full mb-6">Contact Us</h2>
      <InputBlock2
        register={register}
        errors={errors}
        type="text"
        ID="contact-us"
        field="00_Form_Name"
        placeholder="Contact_Us"
        hidden={true}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First name */}
        <InputBlock2
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
        />
        {/* Last name */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={2}
          type="text"
          ID="last-name-input"
          field="02_Last_Name"
          forceClass=""
          placeholder=" Last Name"
          autoComplete="family-name"
          required={true}
          colSpan={2}
        />

        {/* Email */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={5}
          type="email"
          ID="email-input"
          field="05_Email"
          forceClass=""
          placeholder="Email"
          autoComplete="email"
          required={true}
          colSpan={2}
        />

        {/* phone */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={4}
          type="tel"
          ID="phone-input"
          field="04_phone"
          forceClass=""
          autoComplete="tel"
          placeholder="Phone Number"
          required={false}
          colSpan={2}
        />
      </div>
      <h2 className="underline-full mt-10 mb-6">What are you interested in?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Seeking Opportunities */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={6}
              type="checkbox"
              {...register(' 06_Collaborations_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">Collaborations</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={7}
              type="checkbox"
              {...register(' 07_Keynote_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">Keynote Speaking</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={8}
              type="checkbox"
              {...register(' 08_Media_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">Media Visibility</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={9}
              type="checkbox"
              {...register(' 09_Career_Job_Opportunities_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">
              Career Progression (Open to Job Offers)
            </span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={10}
              type="checkbox"
              {...register(' 10_Seek_IP_Investors_Checkboxx')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">Seek IP Investors</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              tabIndex={11}
              type="checkbox"
              {...register(' 11_Partner_with_Industry_Checkbox')}
              className="checkbox checkbox-warning"
            />

            <span className="label-text ml-2 mr-auto">
              Partner with Industry
            </span>
          </label>
        </div>
      </div>
      {/* Academic Details Section */}
      <h2 className="underline-full mt-10 mb-6">Message</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Institution */}
      </div>
      {/* Profile */}
      <div className="col-span-2">
        <textarea
          tabIndex={17}
          id="profile-input"
          field="17_Profile"
          className="w-full textarea textarea-bordered"
          placeholder="Message, comments, testimonials, etc."
        />
      </div>

      {/* End form inputs */}
      <div className="col-span-1">
        <div className="relative">
          <p>
            Any field with an asterisk (<span className="asterisk">*</span>) is
            a required field!
          </p>
        </div>
      </div>
      <div className="text-right mt-6">
        <button tabIndex={30} type="submit" className="btn btn-aj">
          Join Talent Pool
        </button>
      </div>
    </form>
  );
};
export default ContactUsForm;
