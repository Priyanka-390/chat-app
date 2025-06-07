import React from "react";
interface FieldProps {
  type: string;
  className?: string;
  inputValue?: string;
  fieldOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
}

const Field = ({
  type,
  className,
  inputValue,
  placeHolder,
  fieldOnChange,
}: FieldProps) => {
  return (
    <input
      required
      placeholder={placeHolder}
      type={type}
      value={inputValue}
      onChange={fieldOnChange}
      className={`w-full bg-sky-blue rounded-[102px] text-base max-sm:text-sm py-3.5 px-7 border border-dark-blue text-dark-blue outline-0 placeholder:text-dark-blue text-dark-blue ${className}`}
    />
  );
};

export default Field;
