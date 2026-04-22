"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import PasswordFormInput from "./PasswordFormInput";

export default function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [text, setText] = useState("click below to reset your password:");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const [value, setValue] = useState("");

  async function handleSubmit() {
    const response = await fetch("/api/users/resetpassword", {
      method: "POST",
      body: JSON.stringify({ token, newPassword: value }),
    });
    const data = await response.json();

    if (data.success) {
      setText("your password has been reset! you may leave this page now :)");
      setSuccess(true);
    } else if (!data.success && data.status === 404) {
      setText("password reset has failed, please try again later!");
      setSuccess(false);
    } else if (!data.success && data.status === 400) {
      setSuccess(false);
      setErrors(data.errors.password.errors);
    }
  }
  return (
    <>
      <h1 className="text-3xl font-semibold">{text}</h1>
      <form action={handleSubmit}>
        {!success && (
          <div className="flex justify-center">
            <PasswordFormInput
              errors={errors}
              value={value}
              setValue={setValue}
            />
            <button
              className="bg-orange-400 h-fit w-2/10 mt-4 px-2 py-1 border-1
        border-black rounded-md cursor-pointer ml-4"
            >
              reset password
            </button>
          </div>
        )}
      </form>
    </>
  );
}
