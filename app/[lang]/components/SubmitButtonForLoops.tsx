"use client";

import React from "react";
import { CircularLoader } from "./loaders/CircularLoader";

type SubmitButtonForLoopsProps = {
  children?: React.ReactNode;
  pending: boolean;
};

export function SubmitButtonForLoops({ pending, children }: SubmitButtonForLoopsProps) {
  return (
    <button
      className="text-slate-950 text-base font-normal p-4"
      type="submit"
      disabled={pending}
    >
      {pending ? <CircularLoader size={4} /> : children}
    </button>
  );
}
