import styled from "styled-components";
import { themes } from "./themes";

export const ProjectContainer = styled.div`
  padding: 75px 120px;

  @media ${themes.media.maxMobile} {
    padding-inline: 50px;
  }
  @media ${themes.media.maxLowScreenMobile} {
    padding-inline: 0;
  }
`;

export const ProjectBox = styled.div`
  border: 0.5px solid ${themes.colors.mediumGrey};
  border-radius: 6px;
  padding: 40px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h3`
  font-size: 31px;
  font-weight: ${themes.font.weight.medium};
  margin-bottom: 60px;
`;

export const RegularData = styled.div`
  font-weight: ${themes.font.weight.normal};
  font-size: 18px;
  line-height: 27px;
`;
