import React from "react";
import * as Styled from "../styles/auth.styled";

interface IAuthInput {
  title: string;
  type: string;
  placeholder?: string;
  name: string;
  error?: string;
}

const AuthInput = ({ title, type, placeholder, name, error }: IAuthInput) => {
  //   const [passwordIsShown, setPasswordIsShown] = useState<boolean>(
  //     type === "password"
  //   );

  return (
    <Styled.InputWrapper>
      <Styled.InputTitle>{title}</Styled.InputTitle>
      <Styled.AuthInput name={name} type={type} placeholder={placeholder} />
      {error && <Styled.AuthError>{error}</Styled.AuthError>}
    </Styled.InputWrapper>
  );
};

export default AuthInput;
