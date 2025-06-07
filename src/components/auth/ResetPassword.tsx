"use client";
import React, { useState } from "react";
import Field from "../common/Field";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Button from "../common/Button";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center auth-bg-image bg-cover bg-no-repeat p-4 items-center min-h-screen">
          <div className="max-w-[590px] w-full mx-auto bg-white shadow-auth rounded-[12px] md:p-16 sm:p-10 p-6">
              <Heading className="mb-2" headingText="Reset Password" />
              <Paragraph className="max-w-[326px] mx-auto mb-4 sm:mb-6" paragraphText="Reset your password and type current, new and confirm password"/>
        <form>
          <Field placeHolder="Current Password" type="password" />
          <div className="relative mt-3">
            <Field
              placeHolder="New Password"
              type="password"
              className="pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-blue cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="relative mt-3">
            <Field
              placeHolder="Confirm Password"
              type="password"
              className="pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-blue cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="md:mt-10 mt-6">
            <Button buttonType="submit" btnText="Change Password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
