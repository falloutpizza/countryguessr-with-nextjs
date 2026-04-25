"use client";

import { useActionState } from "react";
import { LoginFormState } from "@/src/lib/schemas";
import { redirect } from "next/navigation";
import { useAuthStore } from "@/src/store/authStore";

import LoginForm from "../ui/auth/LoginForm";

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined);
  const setUser = useAuthStore((s) => s.setUser);
  async function login(state: LoginFormState, formData: FormData) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    });
    const data = await response.json();

    if (!data.success) {
      return data;
    }
    setUser(data.user);
    redirect("/");
  }

  return <LoginForm state={state} action={action} pending={pending} />;
}
