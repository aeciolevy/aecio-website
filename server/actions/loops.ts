"use server";

import { z } from "zod";
import { to } from "to-await";
import { postFormData } from "@/lib/fetch";

const loopEmailFormSchema = z.object({
  email: z.string().email(),
});

export const addContactToLoop = async (prevState: any, formData: FormData) => {
  const validateFields = loopEmailFormSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validateFields.success) {
    return {
      status: 400,
      body: {
        message: validateFields.error.flatten().fieldErrors,
      },
    };
  }

  const [error, response] = await to(
    postFormData(`${process.env.LOOPS_SO_ENDPOINT}`, {
      email: formData.get("email"),
    }),
  );

  return {
    message: "You have been added to the newsletter",
  };
};
