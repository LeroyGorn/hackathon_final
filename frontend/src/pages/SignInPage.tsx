import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import AuthButton from "../common/AuthButton";
import AuthInput from "../common/AuthInput";
import AuthModal from "../common/AuthModal";
import { initialSignInData, signInInputData } from "../constants";
import { authService } from "../services/authService";
import {
  AuthBackground,
  AuthBackgroundWrapper,
  AuthSubtitle,
  AuthTitle,
  HelperTextLink,
  HelpText,
  SignInWrapper,
} from "../styles/auth.styled";
import { ISignInData } from "../types/auth.types";

const SignInPage = () => {
  const handleSubmit = (
    values: ISignInData,
    { resetForm }: FormikHelpers<ISignInData>
  ) => {
    console.log(values);
    // authService.signin(values).then((res) => console.log(res));
    resetForm();
  };

  return (
    <SignInWrapper>
      <AuthModal>
        <AuthTitle>{signInInputData.title}</AuthTitle>
        <AuthSubtitle>{signInInputData.subtitle}</AuthSubtitle>
        <Formik initialValues={initialSignInData} onSubmit={handleSubmit}>
          <Form>
            {signInInputData.inputs.map((inputData) => (
              <AuthInput
                key={inputData.id}
                type={inputData.type}
                name={inputData.name}
                title={inputData.title}
                placeholder={inputData.placeholder}
              />
            ))}
            <AuthButton type="submit" title="Login" />
            <HelpText>
              Don’t have an Account?{" "}
              <HelperTextLink href="/signup">Register</HelperTextLink>
            </HelpText>
          </Form>
        </Formik>
      </AuthModal>
      <AuthBackgroundWrapper>
        <AuthBackground src="/images/team.png" alt="auth background" />
      </AuthBackgroundWrapper>
    </SignInWrapper>
  );
};

export default SignInPage;
