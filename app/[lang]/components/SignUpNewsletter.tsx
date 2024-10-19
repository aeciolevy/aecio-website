"use client";

import { useFormState } from "react-dom";
import { addContactToLoop } from "@/server/actions/loops";
import { SubmitButtonForLoops } from "./SubmitButtonForLoops";
import { EmailInput } from "./home/EmailInput";

const initialState = {
  message: "",
};

export const SignUpNewsLetter = () => {
  const [state, formAction] = useFormState(addContactToLoop, initialState);
  console.log("### state", state);
  return (
    <form action={formAction}>
      <EmailInput type="email" name="email" />
      <div className="sm:-ml-2 bg-orange-500 hover:bg-orange-600 w-full sm:w-1/4 md:w rounded-lg justify-center items-center inline-flex">
        <SubmitButtonForLoops>Receive the letters</SubmitButtonForLoops>
      </div>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  );
};
