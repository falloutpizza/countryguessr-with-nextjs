import * as z from "zod";

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(2, { error: "username must be at least 2 characters long!" })
    .trim(),
  email: z.email({ error: "please enter a valid email!" }).trim(),
  password: z
    .string()
    .min(8, { error: "be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { error: "contain at least one letter" })
    .regex(/[0-9]/, { error: "contain at least one number" })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        username?: { errors: string[] };
        email?: { errors: string[] };
        password?: { errors: string[] };
      };
      message?: string;
    }
  | undefined;

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(2, { error: "username must be at least 2 characters long!" })
    .trim(),
  password: z.string().trim(),
});

export type LoginFormState =
  | {
      errors?: {
        username?: { errors: string[] };
        password?: { errors: string[] };
      };
      message?: string;
    }
  | undefined;

export const ResetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, { error: "be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { error: "contain at least one letter" })
    .regex(/[0-9]/, { error: "contain at least one number" })
    .trim(),
});

export type ResetPasswordState =
  | {
      errors?: {
        password?: { errors: string[] };
      };
      message?: string;
    }
  | undefined;
