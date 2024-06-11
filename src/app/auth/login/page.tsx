"use client";
import InputComponent from "@/components/inputComponent";
import { IFormInput } from "@/types/auth";
import { inputsDataLogin } from "@/utils/inputsData";
import { useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function LoginPage() {
  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session?.user) {
        router.push("/dashboard");
      }
    };
    checkSession();
  }, []);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit = handleSubmit(async (data) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (response?.error) {
      setError(response.error);
    } else if (response?.error === null) {
      router.push("/dashboard");
      router.refresh();
    }
    console.log(response);
    //console.log(data);
  });
  return (
    <div className="text-white w-full flex justify-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center gap-6 min-h-screen"
      >
        {error && (
          <span className="bg-red-500 text-sm p-3 w-full rounded-lg">
            {error}
          </span>
        )}
        <h1 className="text-slate-200 font-bold mb-4 text-4xl">
          Iniciar sesión
        </h1>

        {inputsDataLogin.map((data, i) => (
          <InputComponent
            key={i}
            errors={errors}
            inputName={data.inputName}
            label={data.label}
            placeholder={data.placeholder}
            type={data.type}
            register={register}
          />
        ))}
        <button className="p-3 bg-blue-700 rounded-lg w-full hover:bg-blue-900 transform transition-all duration-300">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;
