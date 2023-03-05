import { useFormikContext } from "formik";
import React, { useState, useMemo } from "react";
import * as Styled from "../styles/auth.styled";
import { ICVData } from "../types/createcv.types";

interface ITechStackDropdown {
  setCurrHeader: React.Dispatch<React.SetStateAction<string[]>>;
  currHeader: string[];
  name: string;
  header: string;
  title: string;
  options: string[];
  error?: string | string[];
  className?: string;
}

const FormTechStackDropDown = ({
  setCurrHeader,
  currHeader,
  name,
  header,
  title,
  options,
  error,
  className,
}: ITechStackDropdown) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { values, setFieldValue } = useFormikContext<ICVData>();

  const handleChange = (option: string) => {
    setIsOpen(false);

    setFieldValue(name, [
      ...(values[name as keyof ICVData] as string[]),
      option,
    ]);
    setCurrHeader([...(values[name as keyof ICVData] as string[]), option]);
  };

  const handlePreviewClick = () => {
    setIsOpen((old) => !old);
  };

  const openClassName = useMemo(() => {
    return isOpen ? "open" : "hidden";
  }, [isOpen]);

  const headerClassName = useMemo(() => {
    return currHeader && currHeader.length > 0 ? "selected" : "placeholder";
  }, [currHeader]);

  const preview = currHeader.length ? currHeader.join(", ") : header;

  return (
    <Styled.InputWrapper>
      <Styled.InputTitle>{title}</Styled.InputTitle>
      <Styled.DropdownPreview
        onClick={handlePreviewClick}
        className={headerClassName}
      >
        <span>{preview}</span>
        <Styled.DropdownArrow className={openClassName}>
          <span />
          <span />
        </Styled.DropdownArrow>
      </Styled.DropdownPreview>
      <Styled.AuthError>
        {Array.isArray(error) ? error.join(" ") : error}
      </Styled.AuthError>
      <Styled.DropdownContent className={openClassName}>
        <Styled.DropdownBox>
          {options
            .filter((el) => !currHeader.includes(el))
            .map((option, idx) => (
              <Styled.DropdownOption
                className={className}
                onClick={() => handleChange(option)}
                key={idx}
              >
                {option}
              </Styled.DropdownOption>
            ))}
        </Styled.DropdownBox>
      </Styled.DropdownContent>
    </Styled.InputWrapper>
  );
};

export default FormTechStackDropDown;
