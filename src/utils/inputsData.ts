import { InputComponentProps } from "@/types/auth";

export const inputsDataRegister: Omit<InputComponentProps, "register" | "errors">[] = [
  {
    inputName: "username",
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
  },
  {
    inputName: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    inputName: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
  {
    inputName: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    type: "password",
  },
];

export const inputsDataLogin: Omit<InputComponentProps, "register" | "errors" | "username" | "confirmPassword">[] = [
  {
    inputName: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    inputName: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
];