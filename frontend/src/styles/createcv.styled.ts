import { Field } from "formik";
import styled from "styled-components";
import { themes } from "./themes";

export const CreateCVPageWrapper = styled.div`
  padding: 75px 120px 0;

  @media ${themes.media.maxMobile} {
    padding-inline: 50px;
  }

  @media ${themes.media.maxLowScreenMobile} {
    padding-inline: 20px;
  }
`;

export const CreateCvModal = styled.div`
  border: 0.5px solid ${themes.colors.mediumGrey};
  background-color: ${themes.colors.secondary};
  width: 100%;
  border-radius: 6px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
`;

export const FormTitle = styled.h2`
  font-size: 31px;
  font-weight: ${themes.font.weight.medium};
  margin: 58px 0 28px 40px;
`;

export const InputsWrapper = styled.div`
  padding-inline: 76px;
  padding-bottom: 56px;

  @media ${themes.media.maxMobile} {
    padding-inline: 26px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 110px;

  @media ${themes.media.maxTabletPortrait} {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  width: 500px;

  @media ${themes.media.maxMobile} {
    width: 100%;
  }
`;

export const DropdownBox = styled.div`
  max-height: 100px;
`;

export const InputFile = styled.input``;

export const InputFileLabel = styled.label``;

export const ButtonWrapper = styled.div`
  margin: 40px auto 0;
  width: 50%;

  @media ${themes.media.maxMobile} {
    width: 90%;
  }
`;

export const InputCheckbox = styled(Field)`
  width: 20px;
  height: 20px;
`;

export const InputCheckboxLabel = styled.label`
  display: flex;
  column-gap: 9px;
`;
