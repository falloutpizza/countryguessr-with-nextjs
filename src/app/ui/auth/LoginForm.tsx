"use client";

import FormInput from "./FormInput";
import ForgotPassword from "./ForgotPassword";

export default function LoginForm({
  action,
  state,
  pending,
}: {
  action: (formData: FormData) => void;
  state:
    | {
        errors?: {
          username?: { errors: string[] };
          password?: { errors: string[] };
        };
      }
    | undefined;
  pending: boolean;
}) {
  return (
    <div className="mt-10 mx-auto w-3/10">
      <h1 className="text-3xl font-semibold m-3">login!</h1>
      <form action={action} className="text-left">
        <FormInput type="username" state={state} />

        <FormInput type="password" state={state} />
        <button
          disabled={pending}
          type="submit"
          className="bg-orange-400 h-fit w-full mt-4 px-2 py-1 border-1 border-black rounded-md cursor-pointer"
        >
          login!
        </button>
      </form>
      <ForgotPassword />
    </div>
  );
}
