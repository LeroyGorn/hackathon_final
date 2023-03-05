import styled from "styled-components";
import { themes } from "./themes";

export const InfoSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 80px 80px;
  gap: 20px;

  @media (${themes.media.maxTabletLandScape}) {
    flex-wrap: wrap;
  }

  @media (${themes.media.maxTabletPortrait}) {
    padding: 80px 40px 60px;
  }
`

export const Card = styled.div`
  max-width: 400px;
  max-height: 400px;
  padding: 35px 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
  border: 0.5px solid #878787;
  border-radius: 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);

  .title {
    margin-bottom: 30px;
  }

  .description {
    margin-bottom: 40px;
  }

  @media (${themes.media.maxTabletPortrait}) {
    max-width: 100%;
    max-height: 500px;
  }
`

// export const InfoSectionContainer = styled.div``