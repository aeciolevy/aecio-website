"use client";
import React, { useState } from "react";
import { addContactToLoop } from "@/server/actions/loops";
import { SubmitButtonForLoops } from "./SubmitButtonForLoops";
import { EmailInput } from "./home/EmailInput";
import { to } from "to-await";

const initialState = {
  message: "",
  errorMessage: "",
  pending: false,
};

type SignupNewsLetterProps = {
  buttonCTA: string;
  userGroup: string;
};

export const SignUpNewsLetter = ({ buttonCTA, userGroup }: SignupNewsLetterProps) => {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ ...formState, pending: true });
    const [error, result] = await to(addContactToLoop({ email, userGroup }));
    if (error) {
      setFormState({ ...formState, pending: false, errorMessage: error.message });
    }

    if (result) {
      setFormState({ ...formState, message: result.message, pending: false });
      setTimeout(() => { setFormState(initialState) }, 5000);
    }
    setEmail(""); // Clear the email input
  }

  return (
    <form className="w-full flex flex-row" onSubmit={handleSubmit} >
      <EmailInput
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail((e.target as HTMLInputElement).value)} />
      <div className="sm:-ml-2 bg-orange-500 hover:bg-orange-600 basis-1/3 rounded-lg justify-center items-center inline-flex">
        <SubmitButtonForLoops pending={formState.pending}>{buttonCTA}</SubmitButtonForLoops>
      </div>
      <p className={`${formState.errorMessage ? 'text-red-500' : ''} ${formState.message ? 'animate-blink-and-fade' : ''}`}>
        {formState.errorMessage ? formState.errorMessage : formState?.message}
      </p>
    </form>
  );
};
