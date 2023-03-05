import React from "react";
import TopSection from "../components/topAboutSection";
import BottomSection from "../components/bottomAboutSection";
import * as Styled from "../styles/about.styled"

const AboutPage = () => {

  return (
    <Styled.AboutContainer>
      <TopSection /> 
      <BottomSection />
      <img className="about-bottom" src="./images/about-bottom.svg" alt="Team" />
    </Styled.AboutContainer>
  );
};

export default AboutPage;