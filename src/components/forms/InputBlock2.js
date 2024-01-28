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
  colSpan,
  hidden,
  disabled,
}) => {
  if (required === undefined) required = false;
  if (hidden === undefined) hidden = false;
  if (colSpan === undefined) colSpan = 1;
  if (name === undefined) name = field;
  if (disabled === undefined) disabled = false;
  return (
    <div
      className={`relative w-full flex flex-col gap-1 items-start ${forceClass} col-span-2 ${
        colSpan === 1
          ? 'md:col-span-1'
          : `md:col-span-${colSpan} ${hidden ? 'hide-item' : 'show-item'}`
      }`}
    >
      {label ? <label className="label-text text-xs">{label}</label> : null}
      <input
        tabIndex={tabIndex}
        {...register(field)}
        type={type}
        className="w-full input input-md focus:outline-none focus:border-orange-500"
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required ? true : false}
        hidden={hidden ? true : false}
        disabled={disabled ? true : false}
      />
      {errors[field] && <span className="error">{errors[field].message}</span>}
      {required ? <i className="required">*</i> : null}
    </div>
  );
};
export default InputBlock2;
