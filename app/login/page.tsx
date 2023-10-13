import Image from "next/image";
import LoginForm from "@/components/login/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netflix",
  description: "Generated by create next app",
  icons: {
    icon: "favicon.ico",
  },
};

function Login() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt="logo"
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <LoginForm />
    </div>
  );
}

export default Login;
