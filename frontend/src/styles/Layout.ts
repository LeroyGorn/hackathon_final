import styled from "styled-components";
import { themes } from "./themes";

export const LayoutWrapper = styled.div`
  background-color: ${themes.colors.secondary};
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media ${themes.media.minPCFullHD} {
    width: 1800px;
    margin: 0 auto;
    position: relative;
  }
`;
