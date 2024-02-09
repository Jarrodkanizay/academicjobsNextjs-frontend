import RequestFullJobForm from '@/components/forms/RequestFullJobForm';
import Image from 'next/image';

// type ModalProps = {
//   name: string;
//   heading: string;
//   placeholder: string;
//   buttonText?: string;
//   thankYouMessage?: string;
//   modalReason?: string;
// };

// const ModalForJobPost: React.FC<ModalProps> = ({
const ModalForJobPost = ({
  name,
  heading,
  placeholder = 'Enter email to Join Talent Pool',
  modalReason = 'standard',
  buttonText = 'Join Now',
  thankYouMessage = 'Thanks for joining our Academic Talent Pool!',
}) => {
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
              src="/let-me-share-the-lov.svg"
              width={170}
              height={90}
              alt="Academic Jobs Heart"
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
