import { Field } from "formik";
import styled from "styled-components";
import { themes } from "./themes";

export const InputWrapper = styled.div``;

export const InputTitle = styled.h4`
  margin-block: 0 9px;
  font-size: 16px;
  line-height: 24px;
  font-weight: ${themes.font.weight.normal};
  font-family: ${themes.font.family.poppins};
  color: ${themes.colors.primary};
`;

export const AuthInput = styled(Field)`
  background: ${themes.colors.secondary};
  border: 0.6px solid ${themes.colors.darkGrey};
  border-radius: 6px;
  height: 59px;

  &::placeholder {
    padding: 27px;
    color: ${themes.colors.lightGrey};
  }
`;
