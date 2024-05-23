'use client';
const InputBlock2 = ({
  ID,
  type,
  register,
  label,
  field,
  name = field,
  errors,
  forceClass,
  autoComplete,
  placeholder,
  tabIndex,
  required = false,
  colSpan = 1,
  hidden = false,
  disabled = false,
  inputClass = '',
}) => {
  return (
    <div
      className={`relative w-full flex flex-col gap-1 items-start ${forceClass} col-span-2 ${colSpan === 1
        ? 'md:col-span-1'
        : `md:col-span-${colSpan} ${hidden ? 'hide-item' : 'show-item'}`
        }`}
    >
      <div className="flex">
        <div className="label-container" style={{ position: 'relative', display: 'inline-block' }}>
          {label && (
            <label htmlFor={ID} className="block mb-1" style={{ display: 'inline-block' }}>
              {label}
              {required && <span className="required" style={{ position: 'absolute', top: '-10px', right: '-10px' }}>*</span>}
            </label>
          )}
        </div>

      </div>
      <input
        tabIndex={tabIndex}
        {...register(field)}
        type={type}
        className={`w-full input input-md input-bordered focus:outline-none focus:border-orange-500 ${inputClass}`}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required ? true : false}
        hidden={hidden ? true : false}
        disabled={disabled ? true : false}
      />
      {errors[field] && <span className="error">{errors[field].message}</span>}
    </div>
  );
};
export default InputBlock2;
