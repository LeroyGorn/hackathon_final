import React from "react";
import * as Styled from "../styles/auth.styled";

interface IAuthInput {
  title: string;
  type: string;
  placeholder?: string;
  name: string;
}

const AuthInput = ({ title, type, placeholder, name }: IAuthInput) => {
  //   const [passwordIsShown, setPasswordIsShown] = useState<boolean>(
  //     type === "password"
  //   );

  return (
    <Styled.InputWrapper>
      <Styled.InputTitle>{title}</Styled.InputTitle>
      <Styled.AuthInput name={name} type={type} placeholder={placeholder} />
    </Styled.InputWrapper>
  );
};

export default AuthInput;
