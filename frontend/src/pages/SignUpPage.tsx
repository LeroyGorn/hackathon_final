import { Formik, Form, FormikHelpers } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  ErrorText,
  HelperTextLink,
  HelpText,
  SignUpWrapper,
} from "../styles/auth.styled";
import { ISignUpData } from "../types/auth.types";
import { SignupSchema } from "../validators/SignUpValidator";

const SignInPage = () => {
  const [currHeader, setCurrHeader] = useState<string>("");
  const [error, setError] = useState();
  const navigation = useNavigate();
  const handleSubmit = (
    values: ISignUpData,
    { resetForm }: FormikHelpers<ISignUpData>
  ) => {
    authService
      .signup(values)
      .then(() => navigation("/signin"))
      .catch((err) => setError(err.message));
    setCurrHeader("");
    resetForm();
  };

  return (
    <SignUpWrapper>
      <AuthModal>
        <AuthTitle>{signUpInputData.title}</AuthTitle>
        <AuthSubtitle>{signUpInputData.subtitle}</AuthSubtitle>
        <Formik
          initialValues={initialSignUpData}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
          {({ errors }) => (
            <Form>
              {signUpInputData.inputs.map((inputData) =>
                inputData.dropdown ? (
                  <AuthDropdown
                    key={inputData.id}
                    setCurrHeader={setCurrHeader}
                    currHeader={currHeader}
                    name={inputData.name}
                    title={inputData.title}
                    header={inputData.dropdownHeader}
                    options={inputData.dropdownOptions}
                    error={errors[inputData.name as keyof ISignUpData]}
                  />
                ) : (
                  <AuthInput
                    key={inputData.id}
                    type={inputData.type}
                    name={inputData.name}
                    title={inputData.title}
                    placeholder={inputData.placeholder}
                    error={errors[inputData.name as keyof ISignUpData]}
                  />
                )
              )}
              <AuthButton type="submit" title="Register" />
              <HelpText>
                Already have an Account?{" "}
                <HelperTextLink href="/signin">Log in</HelperTextLink>
              </HelpText>
              {error && <ErrorText>{error}</ErrorText>}
            </Form>
          )}
        </Formik>
      </AuthModal>
      <AuthBackgroundWrapper>
        <AuthBackground src="/images/team.png" alt="auth background" />
      </AuthBackgroundWrapper>
    </SignUpWrapper>
  );
};

export default SignInPage;
