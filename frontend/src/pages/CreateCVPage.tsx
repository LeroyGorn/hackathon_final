import { Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import AuthButton from "../common/AuthButton";
import FormCheckbox from "../common/FormCheckbox";
import FormTechStackDropDown from "../common/FormTechStackDropDown";
import Input from "../common/Input";
import { CreateCVData, CreateInitialValues, StackOptions } from "../constants";
import { cvService } from "../services/cvService";
import { ErrorText } from "../styles/auth.styled";
import * as Styled from "../styles/createcv.styled";
import { ICVData } from "../types/createcv.types";
import { CreateCvSchema } from "../validators/CreateCVValidator";

const CreateCVPage = () => {
  const [currHeader, setCurrHeader] = useState<string[]>([]);
  const [error, setError] = useState<string>();
  const handleSubmit = (
    values: ICVData,
    { resetForm }: FormikHelpers<ICVData>
  ) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      cvService
        .createCV(values, token)
        .then(() => resetForm())
        .catch((err) => setError(err.message));
    }
  };

  const firstInputsPart = CreateCVData.inputs.slice(
    0,
    CreateCVData.inputs.length - 3
  );

  const secondInputsPart = CreateCVData.inputs.slice(
    CreateCVData.inputs.length - 3
  );

  return (
    <Styled.CreateCVPageWrapper>
      <Styled.CreateCvModal>
        <Styled.FormTitle>{CreateCVData.title}</Styled.FormTitle>
        <Styled.InputsWrapper>
          <Formik
            initialValues={CreateInitialValues}
            onSubmit={handleSubmit}
            validationSchema={CreateCvSchema}
          >
            {({ errors }) => (
              <Form>
                <Styled.InputBox>
                  <Styled.InputContainer>
                    <FormTechStackDropDown
                      className="smallOptions"
                      currHeader={currHeader}
                      setCurrHeader={setCurrHeader}
                      name="tech_stack"
                      header="Select Your Stack"
                      title="Select Your Stack"
                      options={StackOptions}
                      error={errors["tech_stack"]}
                    />
                    {firstInputsPart.map((inputData) => (
                      <Input
                        key={inputData.id}
                        error={errors[inputData.name as keyof ICVData]}
                        {...inputData}
                      />
                    ))}
                  </Styled.InputContainer>
                  <Styled.InputContainer>
                    {secondInputsPart.map((inputData) => (
                      <Input
                        key={inputData.id}
                        error={errors[inputData.name as keyof ICVData]}
                        {...inputData}
                      />
                    ))}
                    <FormCheckbox name="is_public" />
                  </Styled.InputContainer>
                </Styled.InputBox>
                <Styled.ButtonWrapper>
                  <AuthButton type="submit" title="Create Your CV" />
                </Styled.ButtonWrapper>
                {error && <ErrorText>{error}</ErrorText>}
              </Form>
            )}
          </Formik>
        </Styled.InputsWrapper>
      </Styled.CreateCvModal>
    </Styled.CreateCVPageWrapper>
  );
};

export default CreateCVPage;
