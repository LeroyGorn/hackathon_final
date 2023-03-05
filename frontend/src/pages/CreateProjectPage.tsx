import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import AuthButton from "../common/AuthButton";
import FormTechStackDropDown from "../common/FormTechStackDropDown";
import { createProjectInputData, initialCreateProjectData, StackOptions } from "../constants";
import { authService } from "../services/authService";
import { AuthInput } from "../styles/auth.styled";
import * as Styled from "../styles/createProject.styled"
import { ICreateProjectData } from "../types/infoCard.types";


const CreateProjectPage = () => {
  const [currHeader, setCurrHeader] = useState<string[]>([]);
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
    // resetForm();
  };
  return (
    <Styled.CreateProjectContainer>
      <div className='wrapper'>
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
              <FormTechStackDropDown
                  className="smallOptions"
                  currHeader={currHeader}
                  setCurrHeader={setCurrHeader}
                  name="tech_stack"
                  header="Select Your Stack"
                  title="Select Your Stack"
                  options={StackOptions}
                  // error={errors["tech_stack"]}
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
              <AuthButton type="submit" title="Create New Project" />
            </Form>
          )}
        </Formik>
      </form>
       </div>
      </div>
    </Styled.CreateProjectContainer>
  );
};

export default CreateProjectPage;
