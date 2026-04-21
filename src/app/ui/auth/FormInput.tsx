import { ReactNode } from "react";

export default function FormInput({
  type,
  state,
}: {
  type: string;
  state:
    | {
        errors?: {
          username?: { errors: string[] };
          email?: { errors: string[] };
          password?: { errors: string[] };
        };
      }
    | undefined;
}) {
  let errorText: ReactNode | undefined = undefined;
  let errorTextColor: string = "border-black";

  if (type === "username" && state?.errors?.username) {
    errorText = <p>{state.errors.username.errors}</p>;
    errorTextColor = "border-red-500";
  } else if (type === "email" && state?.errors?.email) {
    errorText = <p>{state.errors.email.errors}</p>;
    errorTextColor = "border-red-500";
  } else if (type === "password" && state?.errors?.password) {
    errorText = (
      <div>
        <p>password must:</p>
        <ul>
          {state.errors.password.errors.map((error) => (
            <li key={error}>- {error}</li>
          ))}
        </ul>
      </div>
    );
    errorTextColor = "border-red-500";
  }

  return (
    <div className="mt-2">
      <label htmlFor={type}>{type}</label>
      <input
        id={type}
        name={type}
        placeholder={`enter your ${type}`}
        type={type === "password" ? "password" : "text"}
        className={`bg-white ${errorTextColor} border-1 rounded-xs px-2 w-full py-1 block`}
      />
      {errorText && <div className="text-sm text-gray-600">{errorText}</div>}
    </div>
  );
}
