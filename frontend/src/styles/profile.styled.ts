import styled from "styled-components";
import { themes } from "./themes";

export const ProfileContainer = styled.div`
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
  /* width: 100%; */
  border: 0.5px solid #878787;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  padding: 35px 80px;

  .heading-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    button {
      max-width: 200px;
    }
  }

  .title {
    font-size: 40px;
  }

  @media ${themes.media.maxTabletPortrait} {
    padding: 35px 40px;
  }

  @media ${themes.media.maxMobile} {
    flex-direction: column;
    align-items: center;

    .title {
      margin-bottom: 20px;
    }

    .content-wrapper {
      margin-right: 0;
    }

    .heading-wrapper {
      flex-direction: column;

    button {
      max-width: 200px;
    }
  }
  }
`
export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px 100px;

  .about-text:first-child {
    margin-bottom: 40px;
  }

  .update-form {
    width: 400px;
  }

  @media ${themes.media.maxTabletPortrait} {
    padding: 40px;
  }
  
  @media ${themes.media.maxMobile} {
    flex-direction: column;
    padding: 30px 20px;

    .update-form {
      width: 100%;
    }
  }
`

export const UserInfo = styled.div`
  width: 400px;
  height: 500px;
  border: 0.5px solid #878787;
  border-radius: 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  padding: 35px;
  margin-right: 40px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;


  .info-text {
    margin-bottom: 10px;
  }

  .info-image {
    width: 250px;
    align-self: flex-end;
  }

  @media ${themes.media.maxMobile} {
    width: 100%;
    height: 400px;
    margin: 0 0 40px 0;
  }
`