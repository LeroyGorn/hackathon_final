import React, { useState, useEffect } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import AuthButton from "../../common/AuthButton";
import AuthInput from "../../common/Input";
import { initialUpdateUserData, updateInputData } from "../../constants";
import { IUpdateData } from "../../types/auth.types";
import { UpdateSchema } from "../../validators/UpdateValidator";
import AuthDropdown from "../../common/AuthDropdown";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import * as Styled from "../../styles/profile.styled";
import { useSelector } from "react-redux";
import { showUser } from "../../redux/slices/user-slice";

const BottomSection = () => {
  const [currHeader, setCurrHeader] = useState<string>("");
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [error, setError] = useState();
  const navigation = useNavigate();
  const handleSubmit = (
    values: IUpdateData,
    { resetForm }: FormikHelpers<IUpdateData>
  ) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      const { first_name, last_name } = values;
      authService
        .update({ user: { first_name, last_name } }, `Bearer ${token}`)
        .then(() => navigation("/signin"))
        .catch((err) => setError(err.message));
      setCurrHeader("");
    }
    resetForm();
  };

  useEffect(() => {
    setIsLogined(!!localStorage.getItem("ACCESS_TOKEN"));
  }, []);

  const first_name = localStorage.getItem("USER_NAME");
  const last_name = localStorage.getItem("LAST_NAME");
  const email = localStorage.getItem("USER_EMAIL");
  const role = localStorage.getItem("USER_ROLE");

  return (
    <Styled.BottomSection>
      <Styled.UserInfo>
        <div className="wrapper">
          <p className="info-text">
            Name: {first_name} {last_name}
          </p>
          <p className="info-text">Email: {email}</p>
          <p className="info-text">Role: {role}</p>
        </div>
        <img className="info-image" src="./images/profile.svg" alt="Profile" />
      </Styled.UserInfo>
      <Formik
        initialValues={initialUpdateUserData}
        onSubmit={handleSubmit}
        validationSchema={UpdateSchema}
        validateOnBlur
      >
        {({ errors }) => (
          <Form className="update-form">
            {updateInputData.map((inputData) =>
              inputData.dropdown ? (
                <AuthDropdown
                  key={inputData.id}
                  setCurrHeader={setCurrHeader}
                  currHeader={currHeader}
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
            <AuthButton type="submit" title="Update" />
          </Form>
        )}
      </Formik>
    </Styled.BottomSection>
  );
};

export default BottomSection;
