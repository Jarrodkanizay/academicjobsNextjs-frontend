type InputBlock2Props = {
  type?: string;
  register?: any;
  label?: string;
  field?: string;
  errors?: any;
  forceClass?: string;
};

const InputBlock2 = ({
  type,
  register,
  label,
  field,
  errors,
  forceClass,
}: InputBlock2Props) => {
  return (
    <div
      className={` w-full  flex flex-col  gap-1   items-start   ${forceClass}`}
    >
      <label className="label-text text-xs">{label}</label>
      <input
        {...register(field)}
        type={type}
        className="w-full input input-sm input-bordered"
      />
      {/* {errors[field] && <span className="error">{errors[field].message}</span>} */}
    </div>
  );
};
export default InputBlock2;
