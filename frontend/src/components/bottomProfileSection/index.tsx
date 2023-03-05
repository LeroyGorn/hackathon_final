import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import AuthButton from '../../common/AuthButton'
import AuthInput from '../../common/Input'
import { initialUpdateUserData, updateInputData } from '../../constants'
import { IUpdateData } from '../../types/auth.types'
import { UpdateSchema } from '../../validators/UpdateValidator'
import AuthDropdown from '../../common/AuthDropdown'
import { useNavigate } from 'react-router-dom'
import { authService } from '../../services/authService'
import * as Styled from '../../styles/profile.styled'

const BottomSection = () => {
  const [currHeader, setCurrHeader] = useState<string>("");
  const [error, setError] = useState();
  const navigation = useNavigate();
  const handleSubmit = (
    values: IUpdateData,
    // { resetForm }: FormikHelpers<IUpdateData>
  ) => {
    authService
      .update(values)
      .then(() => navigation("/signin"))
      .catch((err) => setError(err.message));
      setCurrHeader("");
    // resetForm();
  };

  return (
    <Styled.BottomSection>
      <Styled.UserInfo>
        <div className='wrapper'>
          <p className='info-text'>Name: JBILV:dvwv</p>
          <p className='info-text'>Email: Blihdvc lehbvevhc qlh</p>
          <p className='info-text'>Role: JBojbdovw</p>
        </div>
        <img className='info-image' src="./images/profile.svg" alt="Profile" />
     </Styled.UserInfo>
      <form className='update-form'>
        <Formik
          initialValues={initialUpdateUserData}
          onSubmit={handleSubmit}
          validationSchema={UpdateSchema}
          validateOnBlur
        >
          {({ errors }) => (
            <Form>
              {updateInputData.map((inputData) => (
                inputData.dropdown ? (
                  <AuthDropdown
                    key={inputData.id}
                    setCurrHeader={setCurrHeader}
                    currHeader={currHeader}
                    name={inputData.name}
                    title={inputData.title}
                    header={inputData.dropdownHeader}
                    options={inputData.dropdownOptions}
                    error={errors[inputData.name as keyof IUpdateData]}
                  />
                ) : (
                  <AuthInput
                    key={inputData.id}
                    type={inputData.type}
                    name={inputData.name}
                    title={inputData.title}
                    placeholder={inputData.placeholder}
                    error={errors[inputData.name as keyof IUpdateData]}
                  />
                )
              ))}
              <AuthButton type="submit" title="Update" />
            </Form>
          )}
        </Formik>
      </form>
    </Styled.BottomSection>
  )
}

export default BottomSection