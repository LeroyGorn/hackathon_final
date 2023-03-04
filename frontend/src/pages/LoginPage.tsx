import { Formik } from "formik";
import React from "react";
import AuthInput from "../common/AuthInput";
import { initialLoginData } from "../constants";

const LoginPage = () => {
  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialLoginData} onSubmit={handleSubmit}>
      <AuthInput title="Email" type="email" placeholder="Email" name="email" />
    </Formik>
  );
};

export default LoginPage;
