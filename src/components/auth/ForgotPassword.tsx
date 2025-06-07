"use client";
import React, { useState } from "react";
import Field from "../common/Field";
import Button from "../common/Button";
import Link from "next/link";
import {LOGIN } from "@/utils/constant";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center auth-bg-image bg-cover bg-no-repeat p-4 items-center min-h-screen">
          <div className="max-w-[590px] w-full mx-auto bg-white shadow-auth rounded-[12px] md:p-16 sm:p-10 p-6">
              <Heading className="mb-2" headingText="Forgot your password?" />
              <Paragraph className="max-w-[326px] mx-auto mb-4 sm:mb-6" paragraphText="Enter your email to reset your password."/>
        <form>
          <Field placeHolder="Email address" type="email" />
          <div className="md:mt-10 mt-6">
            <Button buttonType="submit" btnText="Reset password" />
          </div>
          <p className="text-center text-dark-blue/80 mt-5">
          Go back to{" "}
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
  );
};

export default ForgotPassword;
