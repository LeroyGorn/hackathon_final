import React, { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import AuthButton from "../common/AuthButton";
import FormTechStackDropDown from "../common/FormTechStackDropDown";
import {
  createProjectInputData,
  initialCreateProjectData,
  StackOptions,
} from "../constants";
import { authService } from "../services/authService";
import { AuthInput, ErrorText } from "../styles/auth.styled";
import * as Styled from "../styles/createProject.styled";
import { ICreateProjectData } from "../types/infoCard.types";
import FormCheckbox from "../common/FormCheckbox";
import { CreateProjectValidator } from "../validators/CreateProjectValidator";

const CreateProjectPage = () => {
  const [currHeader, setCurrHeader] = useState<string[]>([]);
  const [error, setError] = useState<string>();
  const navigation = useNavigate();
  const handleSubmit = (
    values: ICreateProjectData,
    { resetForm }: FormikHelpers<ICreateProjectData>
  ) => {
    const token = localStorage.getItem("ACCESS_TOKEN");

    if (token) {
      authService
        .create(values, `Bearer ${token}`)
        .then(() => {
          navigation("/projects");
          resetForm();
        })
        .catch((err) => setError(err.message));
    } else {
      setError("Log in / or Sign Up to create project");
    }
  };
  return (
    <Styled.CreateProjectContainer>
      <div className="wrapper">
        <h2 className="title">Create New Project</h2>
        <div>
          <Formik
            initialValues={initialCreateProjectData}
            onSubmit={handleSubmit}
            validationSchema={CreateProjectValidator}
            validateOnBlur
          >
            {({ errors }) => (
              <Form className="create-form">
                <FormTechStackDropDown
                  className="smallOptions"
                  currHeader={currHeader}
                  setCurrHeader={setCurrHeader}
                  name="project_stack"
                  header="Select Your Stack"
                  title="Select Your Stack"
                  options={StackOptions}
                  error={errors["project_stack"]}
                />
                {createProjectInputData.map((inputData) => (
                  <AuthInput
                    key={inputData.id}
                    type={inputData.type}
                    name={inputData.name}
                    title={inputData.title}
                    placeholder={inputData.placeholder}
                    error={errors[inputData.name as keyof ICreateProjectData]}
                  />
                ))}
                <FormCheckbox title="Make Your Project Open?" name="is_open" />
                <AuthButton type="submit" title="Create New Project" />
                {error && <ErrorText>{error}</ErrorText>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Styled.CreateProjectContainer>
  );
};

export default CreateProjectPage;
