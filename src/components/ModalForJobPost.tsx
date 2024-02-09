import RequestFullJobForm from '@/components/forms/RequestFullJobForm';
import Image from 'next/image';

type ModalProps = {
  name: string;
  heading: string;
  placeholder: string;
  imagePath?: string;
  buttonText?: string;
  thankYouMessage?: string;
  modalReason?: string;
};

const ModalForJobPost = ({
  name,
  heading,
  placeholder = 'Enter email to Join Talent Pool',
  modalReason = 'standard',
  imagePath = '/love-messages/i-love-this-job.svg',
  buttonText = 'Join Now',
  thankYouMessage = 'Thanks for joining our Academic Talent Pool!',
}: ModalProps) => {
  return (
    <>
      <input type="checkbox" id={name} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h2 className="text-lg font-bold">{heading}</h2>
          <p className="py-4">
            <RequestFullJobForm
              formName={`${heading} - Job Post Form`}
              buttonText={buttonText}
              thankYouMessage={thankYouMessage}
              formType={modalReason}
              placeholder={placeholder}
            />
          </p>
          <div className="flex justify-center space-x-4">
            <Image
              src="/icons/heart.svg"
              width={90}
              height={90}
              alt="Academic Jobs Heart"
            />
            <Image
              src={imagePath}
              width={170}
              height={60}
              alt="Academic Love Message"
            />
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={name}>
          Close
        </label>
      </div>
    </>
  );
};

export default ModalForJobPost;
