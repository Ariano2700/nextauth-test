"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import InputComponent from "@/components/inputComponent";
import { IFormInput } from "@/types/auth";
import { inputsDataRegister } from "@/utils/inputsData";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function RegisterPage() {
  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session?.user) {
        router.push("/dashboard");
      }
    };
    checkSession();
  }, []);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        email: data.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //const resJSON = await res.json();
    //console.log(resJSON);
    if (res.ok) {
      //router.push('/auth/login');
      router.push("/api/auth/signin");
    }
  });
  return (
    <div className="text-white w-full flex justify-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center gap-6 min-h-screen w-96"
      >
        <h1 className="text-slate-200 font-bold mb-4 text-4xl">Registrar</h1>
        {inputsDataRegister.map((data, i) => (
          <InputComponent
            key={i}
            errors={errors}
            inputName={data.inputName}
            label={data.label}
            placeholder={data.placeholder}
            register={register}
            type={data.type}
          />
        ))}

        <button className="p-3 bg-blue-700 rounded-lg w-full hover:bg-blue-900 transform transition-all duration-300">
          Register
        </button>
      </form>
    </div>
  );
}
export default RegisterPage;
