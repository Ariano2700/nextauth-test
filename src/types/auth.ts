import { UseFormRegister } from "react-hook-form";

export interface Auth {
  email: string;
  password: string;
}

export interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface InputComponentProps {
  type: string;
  label: string;
  placeholder: string;
  inputName: keyof IFormInput; // Ensure the inputName is one of the keys of IFormInput
  register: UseFormRegister<IFormInput>;
  errors: Partial<Record<keyof IFormInput, { message?: string }>>; // Adjust errors type
}