"use client";
import React, { useState } from "react";
import Field from "../common/Field";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Button from "../common/Button";
import Link from "next/link";
import { FORGOTPASSWORD, SIGNUP } from "@/utils/constant";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import { supabase } from "@/lib/supabaseclient";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
     const [message , setMessage] = useState('')
    const handleLogin = async (e: any) => {
        e.preventDefault()
        const { error } = await supabase.auth.signInWithPassword({ email, password })
       setMessage(error ? error.message : "Login Successfully")
       setEmail('')
       setPassword('')
    }
  return (
    <div className="flex justify-center auth-bg-image bg-cover bg-no-repeat p-4 items-center min-h-screen">
          <div className="max-w-[590px] w-full mx-auto bg-white shadow-auth rounded-[12px] md:p-16 sm:p-10 p-6">
              <Heading className="mb-2" headingText="Welcome back!" />
              <Paragraph className="max-w-[326px] mx-auto mb-4 sm:mb-6" paragraphText="Log in below to access your account and keep things running smoothly."/>
        <form onSubmit={handleLogin}>
          <Field inputValue={email}  fieldOnChange={(e)=>setEmail(e.target.value)} placeHolder="Email address" type="email" />
          <div className="relative mt-3">
            <Field inputValue={password} fieldOnChange={(e)=>setPassword(e.target.value)}
              placeHolder="Password"
              type={showPassword ? "text" : "password"}
              className="pr-10" // for space to show icon
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-blue cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex justify-end">
            <Link
              href={FORGOTPASSWORD}
              className="font-semibold text-end text-dark-blue underline mt-3"
            >
              Forgot password?
            </Link>
          </div>
          <div className="md:mt-10 mt-6">
            <Button buttonType="submit" btnText="Log in" />
          </div>
          <p className="text-center text-dark-blue/80 mt-5">
            Don’t have an account?{" "}
            <Link
              href={SIGNUP}
              className="font-semibold text-dark-blue underline"
            >
              Create account
            </Link>
          </p>
              </form>
              {message}
      </div>
    </div>
  );
};

export default Login;
