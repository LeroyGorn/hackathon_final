import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import AuthButton from "../common/AuthButton";
import AuthDropdown from "../common/AuthDropdown";
import AuthInput from "../common/AuthInput";
import AuthModal from "../common/AuthModal";
import { initialSignUpData, signUpInputData } from "../constants";
import { authService } from "../services/authService";
import {
  AuthBackground,
  AuthBackgroundWrapper,
  AuthSubtitle,
  AuthTitle,
  HelperTextLink,
  HelpText,
  SignUpWrapper,
} from "../styles/auth.styled";
import { ISignInData, ISignUpData } from "../types/auth.types";

const SignInPage = () => {
  const handleSubmit = (
    values: ISignUpData,
    { resetForm }: FormikHelpers<ISignUpData>
  ) => {
    console.log(values);
    // authService.signin(values).then((res) => console.log(res));
    resetForm();
  };

  return (
    <SignUpWrapper>
      <AuthModal>
        <AuthTitle>{signUpInputData.title}</AuthTitle>
        <AuthSubtitle>{signUpInputData.subtitle}</AuthSubtitle>
        <Formik initialValues={initialSignUpData} onSubmit={handleSubmit}>
          <Form>
            {signUpInputData.inputs.map((inputData) =>
              inputData.dropdown ? (
                <AuthDropdown
                  key={inputData.id}
                  name={inputData.name}
                  title={inputData.title}
                  header={inputData.dropdownHeader}
                  options={inputData.dropdownOptions}
                />
              ) : (
                <AuthInput
                  key={inputData.id}
                  type={inputData.type}
                  name={inputData.name}
                  title={inputData.title}
                  placeholder={inputData.placeholder}
                />
              )
            )}
            <AuthButton type="submit" title="Register" />
            <HelpText>
              Already have an Account?{" "}
              <HelperTextLink href="/signin">Log in</HelperTextLink>
            </HelpText>
          </Form>
        </Formik>
      </AuthModal>
      <AuthBackgroundWrapper>
        <AuthBackground src="/images/team.png" alt="auth background" />
      </AuthBackgroundWrapper>
    </SignUpWrapper>
  );
};

export default SignInPage;
