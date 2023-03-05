import styled from "styled-components";
import { themes } from "./themes";

export const UsersContainer = styled.div`
  padding: 20px;
  
  .wrapper {
    max-width: 900px;
    padding: 20px;
    margin: 0 auto;
  }

  button {
    display: block;
    max-width: 200px;
    margin: 0 0 20px auto;
  }

  .users-image {
    display: block;
    max-width: 350px;
    margin: 60px auto 0 0;
  }

  @media ${themes.media.maxMobile} {
    padding: 0 5px 10px;
  }
`

export const CardWrapper = styled.div`
  width: 100%;
  border: 0.5px solid #878787;
  border-radius: 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  padding: 35px 40px;
  margin-bottom: 20px;

  .bold-text {
    font-weight: 700;
  }
    
  .user-name {
      font-size: 38px;
      margin-bottom: 20px;
    }

  .user-experience {
    margin-bottom: 20px;
  }

  .bottom-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      margin: 0;
    }
  }

  @media ${themes.media.maxMobile} {
    padding: 30px;

    .bottom-wrapper {
      flex-direction: column;
      align-items: start;

      p {
        margin-bottom: 20px;
      }
    } 
  }
`