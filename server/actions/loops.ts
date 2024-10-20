"use server";

import { z } from "zod";
import { to } from "to-await";
import { postFormData } from "@/lib/fetch";
import { LoopUserGroups } from "@/app/[lang]/enums/loopsUserGroups";

const loopEmailFormSchema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
  userGroup: z.enum([LoopUserGroups.PORTUGUESE, LoopUserGroups.ENGLISH]),
});

type addContactToLoopParams = {
  email: string;
  userGroup: string;
};

export const addContactToLoop = async ({ email, userGroup }: addContactToLoopParams) => {
  const validateFields = loopEmailFormSchema.safeParse({
    email,
    userGroup,
  });

  if (!validateFields.success) {
    throw new Error(validateFields.error.message);
  }

  const [error, response] = await to(
    postFormData(`${process.env.LOOPS_SO_ENDPOINT}`, {
      email,
      userGroup
    }),
  );

  if (error) {
    throw new Error(error.message);
  }

  return {
    message: "You have been added to the newsletter",
    ...response
  }
};
