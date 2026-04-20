"use client";

import { useActionState } from "react";
import { SignupFormSchema, FormState } from "@/src/lib/schemas";
import * as z from "zod";

import SignupForm from "../ui/users/SignupForm";

async function signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).properties,
    };
  }
  const response = await fetch("/api/users/signup", {
    method: "POST",
    body: JSON.stringify(validatedFields.data),
  });

  const data = await response.json();
  console.log(data);
}

export default function SignupPage() {
  const [state, action, pending] = useActionState(signup, undefined);
  return <SignupForm state={state} action={action} pending={pending} />;
}
