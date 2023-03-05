import React from "react";
import { InputCheckbox, InputCheckboxLabel } from "../styles/createcv.styled";

interface IFormCheckboxProps {
  name: string;
}

const FormCheckbox = ({ name }: IFormCheckboxProps) => {
  return (
    <InputCheckboxLabel>
      <InputCheckbox name="is_public" type="checkbox" />
      Make Your CV Public?
    </InputCheckboxLabel>
  );
};

export default FormCheckbox;
