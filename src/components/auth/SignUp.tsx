"use client"
import { LOGIN } from '@/utils/constant'
import React, { useState } from 'react'
import Field from '../common/Field'
import Paragraph from '../common/Paragraph'
import Heading from '../common/Heading'
import Link from 'next/link'
import Button from '../common/Button'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { supabase } from '@/lib/supabaseclient'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message , setMessage] = useState('')
    const handleSignUp = async (e : any) => {
        e.preventDefault()
        const {error}=await supabase.auth.signUp({email,password})
      setMessage(error ? error.message : "check your mail")
    }
    
  return (
    <div className="flex justify-center auth-bg-image bg-cover bg-no-repeat p-4 items-center min-h-screen">
    <div className="max-w-[590px] w-full mx-auto bg-white shadow-auth rounded-[12px] md:p-16 sm:p-10 p-6">
        <Heading className="mb-2" headingText="Sign up" />
        <Paragraph className="max-w-[374px] mx-auto mb-4 sm:mb-6" paragraphText="Create your account to unlock access and stay updated with everything we offer."/>
              <form onSubmit={handleSignUp}>
              <Field placeHolder="First name" type="text" />
              <Field placeHolder="Last name" type="text" className="mt-3" />
    <Field fieldOnChange={(e)=>setEmail(e.target.value)} className='mt-3' placeHolder="Email address" type="email" />
    <div className="relative mt-3">
            <Field fieldOnChange={(e)=>setPassword(e.target.value)}
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
    <div className="md:mt-10 mt-6">
      <Button buttonType="submit" btnText="Sign up" />
    </div>
    <p className="text-center text-dark-blue/80 mt-5">
    Already a member?  
      <Link
        href={LOGIN}
        className="font-semibold text-dark-blue underline"
      >
        Log in
      </Link>
    </p>
  </form>
</div>
</div>
  )
}

export default SignUp
