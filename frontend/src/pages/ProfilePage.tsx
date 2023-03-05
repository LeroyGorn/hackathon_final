import React from "react";
import TopProfileSection from "../components/topProfileSection";
import BottomProfileSection from "../components/bottomProfileSection";
import * as Styled from "../styles/profile.styled"

const ProfilePage = () => {

  return (
    <Styled.ProfileContainer>
      <TopProfileSection /> 
      <BottomProfileSection />
    </Styled.ProfileContainer>
  );
};

export default ProfilePage;