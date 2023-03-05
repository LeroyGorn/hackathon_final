import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../common/AuthButton";
import AuthDropdown from "../common/AuthDropdown";
import { createProjectInputData, initialCreateProjectData } from "../constants";
import { authService } from "../services/authService";
import { AuthInput } from "../styles/auth.styled";
import * as Styled from "../styles/createProject.styled"
import { ICreateProjectData } from "../types/infoCard.types";


const CreateProjectPage = () => {
  const [currHeader, setCurrHeader] = useState<string>("");
  const [error, setError] = useState();
  const navigation = useNavigate();
  const handleSubmit = (
    values: ICreateProjectData,
    // { resetForm }: FormikHelpers<IUpdateData>
  ) => {
    authService
      .create(values)
      .then(() => navigation("/signin"))
      .catch((err) => setError(err.message));
      setCurrHeader("");
    // resetForm();
  };
  return (
    <Styled.CreateProjectContainer>
      <h2 className="title">Create New Project</h2>
      <div>
      <form className='create-form'>
        <Formik
          initialValues={initialCreateProjectData}
          onSubmit={() => {return}}
          // validationSchema={UpdateSchema}
          validateOnBlur
        >
          {({ errors }) => (
            <Form>
              {createProjectInputData.map((inputData) => (
                inputData.dropdown ? (
                  <AuthDropdown
                    key={inputData.id}
                    setCurrHeader={setCurrHeader}
                    currHeader={currHeader}
                    name={inputData.name}
                    title={inputData.title}
                    header={inputData.dropdownHeader}
                    options={inputData.dropdownOptions}
                    error={errors[inputData.name as keyof ICreateProjectData]}
                  />
                ) : (
                  <AuthInput
                    key={inputData.id}
                    type={inputData.type}
                    name={inputData.name}
                    title={inputData.title}
                    placeholder={inputData.placeholder}
                    error={errors[inputData.name as keyof ICreateProjectData]}
                  />
                )
              ))}
              <AuthButton type="submit" title="Create New Project" />
            </Form>
          )}
        </Formik>
      </form>
      </div>
    </Styled.CreateProjectContainer>
  );
};

export default CreateProjectPage;
