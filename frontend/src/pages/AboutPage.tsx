import React from "react";
import TopSection from "../components/topSection";
import BottomSection from "../components/bottomSection";
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