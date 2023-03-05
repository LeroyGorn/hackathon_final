import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthButton from "../common/AuthButton";
import Input from "../common/Input";
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
import { SigninSchema } from "../validators/SignInValidator";
import { get } from "../redux/slices/user-slice";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = (
    values: ISignInData,
    { resetForm }: FormikHelpers<ISignInData>
  ) => {
    authService.signin(values).then((res) => {
      if (res) {
        console.log(res);

        localStorage.setItem("ACCESS_TOKEN", res.access);
        localStorage.setItem("REFRESH_TOKEN", res.refresh);
        localStorage.setItem("USER_NAME", res.first_name);
        localStorage.setItem("LAST_NAME", res.last_name);
        localStorage.setItem("USER_EMAIL", res.email);
        localStorage.setItem("USER_ROLE", res.role);
        localStorage.setItem("USER_ID", `${res.id}`);
        const { first_name, last_name, email, role } = res;
        const userStoreData = { first_name, last_name, email, role };
        dispatch(get(userStoreData));
        navigation("/");
      }
    });
    resetForm();
  };

  return (
    <SignInWrapper>
      <AuthModal>
        <AuthTitle>{signInInputData.title}</AuthTitle>
        <AuthSubtitle>{signInInputData.subtitle}</AuthSubtitle>
        <Formik
          initialValues={initialSignInData}
          onSubmit={handleSubmit}
          validationSchema={SigninSchema}
          validateOnBlur
        >
          {({ errors }) => (
            <Form>
              {signInInputData.inputs.map((inputData) => (
                <Input
                  key={inputData.id}
                  type={inputData.type}
                  name={inputData.name}
                  title={inputData.title}
                  placeholder={inputData.placeholder}
                  error={errors[inputData.name as keyof ISignInData]}
                />
              ))}
              <AuthButton type="submit" title="Login" />
              <HelpText>
                Don’t have an Account?{" "}
                <HelperTextLink to="/signup">Register</HelperTextLink>
              </HelpText>
            </Form>
          )}
        </Formik>
      </AuthModal>
      <AuthBackgroundWrapper>
        <AuthBackground src="/images/team.png" alt="auth background" />
      </AuthBackgroundWrapper>
    </SignInWrapper>
  );
};

export default SignInPage;
