"use client";

import { useActionState } from "react";
import { FormState } from "@/src/lib/schemas";
import { redirect } from "next/navigation";
import { useAuthStore } from "@/src/store/authStore";

import SignupForm from "../ui/auth/SignupForm";

export default function SignupPage() {
  const [state, action, pending] = useActionState(signup, undefined);
  const setUser = useAuthStore((s) => s.setUser);
  async function signup(state: FormState, formData: FormData) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email"),
      }),
    });
    const data = await response.json();

    if (!data.success) {
      return data;
    }
    setUser(data.user); // instant UI update
    redirect("/");
  }

  return <SignupForm state={state} action={action} pending={pending} />;
}
