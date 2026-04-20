import { FormState } from "@/src/lib/schemas";

export default function SignupForm({
  action,
  state,
  pending,
}: {
  action: (formData: FormData) => void;
  state:
    | {
        errors?: {
          username?: { errors: string[] };
          email?: { errors: string[] };
          password?: { errors: string[] };
        };
      }
    | undefined;
  pending: boolean;
}) {
  return (
    <form action={action} className="mt-20">
      <div>
        <label htmlFor="username">username</label>
        <input
          id="username"
          name="username"
          placeholder="enter your username"
        />
      </div>
      {state?.errors?.username && <p>{state.errors.username.errors}</p>}

      <div>
        <label htmlFor="email">email</label>
        <input id="email" name="email" placeholder="enter your email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email.errors}</p>}

      <div>
        <label htmlFor="password">password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>password must:</p>
          <ul>
            {state.errors.password.errors.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        disabled={pending}
        type="submit"
        className="bg-orange-400 h-fit m-2 mt-4 px-2 py-1 border-1 border-black rounded-md cursor-pointer"
      >
        sign up!
      </button>
    </form>
  );
}
