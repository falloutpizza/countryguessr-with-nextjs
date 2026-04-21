"use client";

import { useState, SubmitEvent } from "react";

export default function ForgotPassword() {
  const [forgotPw, setForgotPw] = useState(false);
  const [text, setText] = useState("forgot password?");
  const [value, setValue] = useState("");
  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("/api/users/sendresetmail", {
      method: "POST",
      body: JSON.stringify({ email: value }),
    });
    const data = await response.json();
    if (!data.success) {
      setText("an error occured, please try again!");
    }
    setText("sent! click here to retry :)");
    setForgotPw(false);
  }
  return (
    <div className="text-xs mt-2">
      <p
        onClick={() => {
          setForgotPw(true);
          setText("enter email to send password reset link to:");
        }}
        className="cursor-pointer"
      >
        {text}
      </p>
      {forgotPw && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            className="py-1 px-2 border-black border-1 mt-2 mb-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="bg-lime-300 h-fit px-2 py-1 border-1 border-black rounded-md cursor-pointer">
            send password reset link
          </button>
        </form>
      )}
    </div>
  );
}
