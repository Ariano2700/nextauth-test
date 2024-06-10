import { InputComponentProps } from "@/types/auth";

const InputComponent = ({
  type,
  errors,
  inputName,
  label,
  placeholder,
  register,
}: InputComponentProps) => {
  return (
    <div className="w-full flex flex-col items-start">
      <label
        className="text-slate-500 block text-sm text-start"
        htmlFor={inputName}
      >
        {label}
      </label>
      <input
        className="text-black p-3 rounded w-full"
        type={`${type}`}
        placeholder={placeholder}
        {...register(inputName, {
          required: {
            value: true,
            message: `${label} is required`,
          },
        })}
      />
      {errors[inputName] && (
        <span className="text-red-500">{errors[inputName]?.message}</span>
      )}
    </div>
  );
};
export default InputComponent;
