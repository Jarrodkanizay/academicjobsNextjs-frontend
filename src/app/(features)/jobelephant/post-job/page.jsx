'use client'
import InputBlock from '@/components/forms/InputBlock'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import BaseApi from '@/lib/store/Base'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { jobElephantContacts } from '@/data/jobElephantContacts'
import Image from 'next/image'
const TalentPoolForm = () => {
  let content
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    setError
  } = useForm()
  const mutation = useMutation({
    mutationFn: async (data) => {
      return await BaseApi.post('/sendemail', data)
    }
  })
  const onSubmit = async (data) => {
    // e.preventDefault();
    // alert()
    console.log('data', data)
    mutation.mutate({ ...data, '00_formSource': 'Message from: JobElephant Post Form' })
  }
  if (mutation.isLoading) {
    return (
      <div className="bg-white relative max-w-screen-lg mx-auto pl-2">
        <div className="p-4 animate-pulse">
          <div className="w-1/4 pr-4">
            <div className="rounded-xl bg-gray-300 h-16 w-full">'Sending Jobs ...'</div>
          </div>
        </div>
      </div>
    )
  }
  if (mutation.isError) {
    return <div>An error occurred: {mutation.error.message}</div>
  }
  if (mutation.isSuccess) {
    router.push('https://buy.stripe.com/6oE3dSddS3Mc6Ry3ce')
  } else {
    content = (
      <div className=" bg-pink-100">
<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 bg-sky-100">
      <div>
                <h3 className="text-emerald-600">

      Welcome to our new JobElephant form. Taking you two minutes per job, saving you 6 minutes each time!
                </h3>
      <Image
                  width={300}
                  height={300}
                  src="https://academicjobs.s3.amazonaws.com/img/_misc/jobelephant.gif"
                  className=""
                  alt="AI Powered Recruitment Platform"
                />
                </div>
      <div>
      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 justify-start">
          <h1 className="text-4xl font-bold mb-6">
          JobElephant Quick Post
          </h1>
          <div className="w-full  flex flex-col items-start">
          <label className="label-text text-xs mb-1">Name (JobElephant person posting the job)</label>
            <select className="select select-bordered w-full bg-white focus:outline-none focus:border-orange-500"
              {...register('01_Name_Job_Elephant')}
              onChange={(e) => {
                setValue('02_Email', e.target.value)
              }}
            >
              {jobElephantContacts.map((el, index) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <InputBlock register={register} errors={errors}
            label="Email"
            type="text"
            field="02_Email"
            forceClass=" py-3 text-black"
            placeholder=""
          />
          <InputBlock register={register} errors={errors}
            label="JobElephant Client (ie: Utah University)"
            type="text"
            field="03_JobElephantClient"
            forceClass=" py-3 text-black"
            placeholder=""
          />
          <InputBlock register={register} errors={errors}
            label="Job Link URL (ie: apptrkr.com/...)"
            type="text"
            field="04_Job_Link_URL"
            forceClass=" py-3 text-black"
            placeholder=""
          />

          <label className="form-control">
              <span className="label-text text-xs pb-1">Notes or Special Instructions</span>
              <textarea className="textarea textarea-bordered h-32 focus:outline-none focus:border-orange-500" id="notes" placeholder="Type your message here."
                      {...register('05_Notes')}
                    ></textarea>
          </label>

          {/* <QuillEditor
            value={content}
            onChange={(value) => {
              setValue("job_description", value)
            }}
            className="w-full h-[70%] mt-10 bg-white"
          /> */}
          <button className="btn btn-accent mt-4">Submit & PayNow </button>
        </div>
      </form>

      </div>

      </div>
      </div>

    )
  }
  return (
    <div className="mx-auto my-10 flex flex-col gap-4 justify-start">
      {content}
    </div>
  )
}
export default TalentPoolForm
