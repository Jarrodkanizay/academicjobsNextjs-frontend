'use client';
import React, { useState, useEffect, watch } from 'react';
import countries from '@/data/CountryList.json';
import InputBlock2 from './InputBlock2';
import { useForm } from 'react-hook-form';
import { keepPreviousData, useQuery, useMutation } from '@tanstack/react-query';
import BaseApi from '@/lib/store/Base';
import FormSubmissionMessage from './FormSubmissionMessage';

const RankingRegistrationFormAcademics = ({
  maxWidth,
  formName = 'Talent Pool Form',
  detailsHeading = 'Your Details',
  academicDetailsHeading = 'Current Academic Details',
  academicEmploymentHeading = '',
  academicAwardsHeading = '',
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

  const firstName = watch('01_First_Name');

  const onSubmit = async (data) => {
    //e.preventDefault();
    //alert()
    console.log('data', data);
    mutation.mutate(data);
  };
  // useEffect(() => {
  //   setValue('00_Form_Name', 'Talent Pool Form Submission');
  // }, [setValue]);

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
        message="We are excited to welcome you to our Talent Pool and the benefits it will bring to you and your career. We will be in touch with you shortly."
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
      <h2 className="underline-full mb-6">{detailsHeading}</h2>
      <InputBlock2
        register={register}
        errors={errors}
        type="text"
        ID="talent-pool-form-submission"
        name="00_Form_Name"
        field="00_Form_Name"
        placeholder="Talent Pool Form Submission"
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
          name="01_First_Name"
          forceClass=""
          placeholder="First Name"
          autoComplete="given-name"
          required={true}
        />
        {/* Last name */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={2}
          type="text"
          ID="last-name-input"
          field="02_Last_Name"
          name="02_Last_Name"
          forceClass=""
          placeholder=" Last Name"
          autoComplete="family-name"
          required={true}
        />

        {/* Academic Title */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={3}
          type="text"
          ID="name-input"
          field="03_Academic_Title"
          name="03_Academic_Title"
          forceClass=""
          placeholder="Academic Title (Role or Position)"
          required={true}
        />

        {/* phone */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={4}
          type="tel"
          ID="phone-input"
          field="04_phone"
          name="04_phone"
          forceClass=""
          autoComplete="tel"
          placeholder="Phone Number"
          required={false}
        />
        {/* Email */}
        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={5}
          type="email"
          ID="email-input"
          field="05_Email"
          name="05_Email"
          forceClass=""
          placeholder="Email"
          autoComplete="email"
          required={true}
          colSpan={2}
        />
      </div>
      {/* Academic Details Section */}
      <h2 className="underline-full mt-10 mb-6">{academicDetailsHeading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Institution */}

        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={20}
          type="text"
          ID="institution-input"
          field="20_Institution"
          name="20_Institution"
          forceClass=""
          placeholder="Institution/University (Current, Last or Attended)"
          required={true}
          colSpan={2}
        />

        {/* Department/Faculty */}

        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={21}
          type="text"
          ID="department-faculty-input"
          field="21_Department_Faculty"
          name="21_Department_Faculty"
          forceClass=""
          placeholder="Department/Faculty"
          required={true}
        />

        {/* Specialty */}

        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={22}
          type="text"
          ID="specialty-input"
          field="22_Specialty"
          name="22_Specialty"
          forceClass=""
          placeholder="Specialty"
          required={true}
        />

        {/* Location */}

        <InputBlock2
          register={register}
          errors={errors}
          tabIndex={23}
          type="text"
          ID="location-input"
          field="23_Institution_Location"
          name="23_Institution_Location"
          forceClass=""
          placeholder="Institution Location"
          required={true}
        />

        <select
          tabIndex={24}
          {...register('24_Country')}
          id="country-select"
          field="24_Country"
          name="24_Country"
          className="select select-bordered w-full focus:outline-none focus:border-orange-500"
          required={true}
        >
          <option value="" disabled selected>
            Select a country...
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      {academicEmploymentHeading !== '' && (
        <>
          <h2 className="underline-full mt-10 mb-6">
            {academicEmploymentHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Institution */}

            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={30}
              type="text"
              ID="institution-previous-A"
              field="30_Institution-previous-A"
              name="30_Institution-previous-A"
              forceClass=""
              placeholder="Institution/University (Current, Last or Attended)"
              required={true}
              colSpan={2}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={31}
              type="text"
              ID="institution-previous-B"
              field="31_Institution-previous-B"
              name="31_Institution-previous-B"
              forceClass=""
              placeholder="Institution/University (Current, Last or Attended)"
              required={true}
              colSpan={2}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={32}
              type="text"
              ID="institution-previous-C"
              field="32_Institution-previous-C"
              name="32_Institution-previous-C"
              forceClass=""
              placeholder="Institution/University (Current, Last or Attended)"
              required={true}
              colSpan={2}
            />
          </div>
        </>
      )}
      {academicAwardsHeading !== '' && (
        <>
          <h2 className="underline-full mt-10 mb-6">{academicAwardsHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Institution */}

            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={40}
              type="text"
              ID="award-achievement-input-A"
              field="40_award-achievement-A"
              name="40_award-achievement-A"
              forceClass=""
              placeholder="Award or Achievement"
              required={true}
              colSpan={1}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={41}
              type="text"
              ID="award-achievement-input-B"
              field="41_award-achievement-B"
              name="41_award-achievement-B"
              forceClass=""
              placeholder="Award or Achievement"
              required={true}
              colSpan={1}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={42}
              type="text"
              ID="award-achievement-input-C"
              field="42_award-achievement-C"
              name="42_award-achievement-C"
              forceClass=""
              placeholder="Award or Achievement"
              required={true}
              colSpan={1}
            />
            <InputBlock2
              register={register}
              errors={errors}
              tabIndex={43}
              type="text"
              ID="award-achievement-input-D"
              field="43_award-achievement-D"
              name="43_award-achievement-D"
              forceClass=""
              placeholder="Award or Achievement"
              required={true}
              colSpan={1}
            />
          </div>
        </>
      )}
      {/* Profile */}
      <div className="col-span-2 mt-6">
        <textarea
          tabIndex={100}
          id="profile-input"
          field="100_Profile"
          className="w-full textarea textarea-bordered focus:outline-none focus:border-orange-500"
          placeholder="OPTIONAL - Please write a brief profile noting your key skills, experience, and achievements."
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
        <button tabIndex={200} type="submit" className="btn btn-aj">
          Get My Ranking
        </button>
      </div>
    </form>
  );
};
export default RankingRegistrationFormAcademics;
