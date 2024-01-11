type InputBlock2Props = {
  ID?: string | number;
  name?: string;
  type?: string;
  register?: any;
  label?: string;
  field?: string;
  errors?: any;
  forceClass?: string;
  autoComplete?: string;
  placeholder?: string;
  tabIndex?: number;
  required?: boolean;
};

const InputBlock2 = ({
  ID,
  name,
  type,
  register,
  label,
  field,
  errors,
  forceClass,
  autoComplete,
  placeholder,
  tabIndex,
  required,
}: InputBlock2Props) => {
  return (
    <div
      className={` w-full  flex flex-col  gap-1   items-start   ${forceClass}`}
    >
      <label className="label-text text-xs">{label}</label>
      <input
        {...(ID ? { id: ID } : {})}
        {...(required ? { required: required } : {})}
        tabIndex={tabIndex}
        name={name}
        {...register(field)}
        type={type}
        className="w-full input input-sm input-bordered focus:outline-none focus:border-orange-500"
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
      {/* {errors[field] && <span className="error">{errors[field].message}</span>} */}
    </div>
  );
};
export default InputBlock2;
