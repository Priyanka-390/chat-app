import React from "react";
interface btnProps {
  btnText?: string;
  CustomOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: "submit" | "reset" | "button" | undefined;
}

const Button = ({
  btnText,
  CustomOnClick,
  buttonType = "submit",
}: btnProps) => {
  return (
    <button
      type={buttonType}
      onClick={(e) => CustomOnClick && CustomOnClick(e)}
      className="group flex cursor-pointer relative justify-center px-4 max-w-[462px] w-full py-4 mx-auto !bg-dark-blue !border-[2px] !border-dark-blue text-white font-medium !leading-120 after:!shadow-none text-base !overflow-hidden rounded-full transition duration-500"
    >
      <span className="relative z-[2] duration-300 max-sm:!text-sm text-base transition-all text-nowrap !font-medium group-hover:text-dark-blue">
        {btnText}
      </span>
      <span className="absolute top-full left-0 w-1/4 h-full bg-white rounded-full transition duration-500 group-hover:translate-y-[-32px]  scale-200 translate-y-full delay-[0s] z-[1]"></span>
      <span className="absolute top-full left-1/4 w-1/4 h-full bg-white rounded-full transition duration-500 group-hover:translate-y-[-32px]  scale-200 translate-y-full delay-[100ms] z-[1]"></span>
      <span className="absolute top-full left-1/2 w-1/4 h-full bg-white rounded-full transition duration-500 group-hover:translate-y-[-32px]  scale-200 translate-y-full delay-[200ms] z-[1]"></span>
      <span className="absolute top-full left-[75%] w-1/4 h-full bg-white rounded-full transition duration-500 group-hover:translate-y-[-32px]  scale-200 translate-y-full delay-[300ms] z-[1]"></span>
    </button>
  );
};

export default Button;
