"use client";
import AuthForm from "@/components/AuthForm";
import { signInSchema, signUpSchema } from "@/lib/validations";
import React from "react";

const SignUpPage = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={(() => {}) as any}
  />
);

export default SignUpPage;
