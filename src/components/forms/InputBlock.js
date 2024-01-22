'use client';
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
  hidden,
}) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 items-start ${forceClass}`}>
      <label className="label-text text-xs">{label}</label>
      <input
        tabIndex={tabIndex}
        {...register(field)}
        type={type}
        className="w-full input input-md input-bordered focus:outline-none focus:border-orange-500"
        autoComplete={autoComplete}
        placeholder={placeholder}
        hidden={hidden}
      />
      {errors[field] && <span className="error">{errors[field].message}</span>}
    </div>
  );
};
export default InputBlock2;
