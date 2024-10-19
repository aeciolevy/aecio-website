import React from "react";

export const EmailInput = (props: React.HTMLProps<HTMLInputElement>) => {
  const { placeholder } = props;
  return (
    <>
      <input
        className="bg-gray-800 w-full sm:w-3/4 rounded-md text-gray-400 text-base font-normal p-4 focus:outline-none"
        placeholder={`${placeholder || "Enter your email"} `}
        {...props}
      />
    </>
  );
};
