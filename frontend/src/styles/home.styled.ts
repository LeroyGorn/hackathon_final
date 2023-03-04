import styled from "styled-components";
import { themes } from "./themes";

export const HomeContainer = styled.div`
  .main-image {
    width: 100%;
  }

  .bottom-image {
    max-width: 500px;
    display: block;
    margin-left: auto;
  }

  @media (${themes.media.maxMobile}) {
  .bottom-image {
    max-width: 300px;
  }
  }
`