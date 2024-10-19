"use client";
import { useFormState } from "react-dom";
import { addContactToLoop } from "@/server/actions/loops";
import { SubmitButtonForLoops } from "./SubmitButtonForLoops";
import { EmailInput } from "./home/EmailInput";

const initialState = {
  message: "",
};

type SignupNewsLetterProps = {
  buttonCTA: string;
};

export const SignUpNewsLetter = ({ buttonCTA }: SignupNewsLetterProps) => {
  const [state, formAction] = useFormState(addContactToLoop, initialState);

  return (
    <form className="w-full" action={formAction}>
      <EmailInput type="email" name="email" />
      <div className="sm:-ml-2 bg-orange-500 hover:bg-orange-600 w-full sm:w-1/4 md:w rounded-lg justify-center items-center inline-flex">
        <SubmitButtonForLoops>{buttonCTA}</SubmitButtonForLoops>
      </div>
      <p aria-live="polite" className="animate-blink-and-fade">
        {state?.message}
      </p>
    </form>
  );
};
