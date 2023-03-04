import React from "react";
import InfoSection from "../components/infoSection";
import * as Styled from "../styles/home.styled"

const HomePage = () => {

  return (
    <Styled.HomeContainer>
      <img className="main-image" src="./images/homepage.png" alt="Homepage" />
      <InfoSection />
      <img className="bottom-image" src="./images/team.png" alt="Team" />
    </Styled.HomeContainer>
  );
};

export default HomePage;
