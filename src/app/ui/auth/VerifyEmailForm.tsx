"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [text, setText] = useState("click below to verify your email:");
  const [success, setSuccess] = useState(false);
  async function handleClick() {
    const response = await fetch("/api/users/verifyemail", {
      method: "POST",
      body: JSON.stringify({ token }),
    });
    const data = await response.json();
    setSuccess(true);

    if (data.success) {
      setText("your email has been verified! you may leave this page now :)");
    } else {
      setText(
        "verification has failed, please make sure you entered the correct email!",
      );
    }
  }
  return (
    <>
      <h1 className="text-3xl font-semibold">{text}</h1>
      <form action={handleClick}>
        {!success && (
          <button
            className="bg-orange-400 h-fit w-2/10 mt-4 px-2 py-1 border-1
        border-black rounded-md cursor-pointer"
          >
            verify email
          </button>
        )}
      </form>
    </>
  );
}
