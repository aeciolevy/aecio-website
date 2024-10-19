"use client";

import { useFormStatus } from "react-dom";
import React from "react";

type SubmitButtonForLoopsProps = {
  children?: React.ReactNode;
};
export function SubmitButtonForLoops({ children }: SubmitButtonForLoopsProps) {
  const { pending } = useFormStatus();
  console.log("### pending", pending);

  return (
    <button
      className="text-slate-950 text-base font-normal p-4"
      type="submit"
      disabled={pending}
    >
      {children}
    </button>
  );
}
