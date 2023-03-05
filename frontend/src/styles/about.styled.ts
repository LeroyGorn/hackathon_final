import styled from "styled-components";
import { themes } from "./themes";

export const AboutContainer = styled.div`
  .about-bottom {
    max-width: 400px;
  }

  @media ${themes.media.maxMobile} {
    .about-bottom {
      max-width: 300px;
    }
  }
`

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid #878787;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  padding: 35px 80px;

  .content-wrapper {
    height: fit-content;
    margin-right: 20px;
  }

  .title {
    font-size: 40px;
    margin-bottom: 30px;
  }

  @media ${themes.media.maxTabletPortrait} {
    padding: 35px 40px;
  }

  @media ${themes.media.maxMobile} {
    flex-direction: column;
    align-items: center;

    .content-wrapper {
      margin-right: 0;
    }
  }
`
export const BottomSection = styled.div`
  padding: 90px 100px;

  .about-text:first-child {
    margin-bottom: 40px;
  }

  @media ${themes.media.maxTabletPortrait} {
    padding: 40px;
  }
  
  @media ${themes.media.maxMobile} {
    padding: 30px 20px;
  }
`