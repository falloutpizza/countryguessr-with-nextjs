"use client";

import { useActionState, SubmitEvent } from "react";
import { SignupFormSchema, FormState } from "@/src/lib/schemas";
import * as z from "zod";

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

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form action={action}>
      <div>
        <label htmlFor="username">Name</label>
        <input id="username" name="username" placeholder="Name" />
      </div>
      {state?.errors?.username && <p>{state.errors.username.errors}</p>}

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email.errors}</p>}

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.errors.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <button disabled={pending} type="submit">
        Sign Up
      </button>
    </form>
  );
}
