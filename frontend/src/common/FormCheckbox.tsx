import React from "react";
import { InputCheckbox, InputCheckboxLabel } from "../styles/createcv.styled";

interface IFormCheckboxProps {
  name: string;
  title?: string;
  checked?: boolean;
}

const FormCheckbox = ({ name, title }: IFormCheckboxProps) => {
  return (
    <InputCheckboxLabel>
      <InputCheckbox checked name={name} type="checkbox" />
      {title ? title : "Make Your CV Public?"}
    </InputCheckboxLabel>
  );
};

export default FormCheckbox;
