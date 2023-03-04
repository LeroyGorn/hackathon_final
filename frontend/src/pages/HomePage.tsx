import React, { useEffect, useState } from "react";
import InfoSection from "../components/infoSection";
import * as Styled from "../styles/home.styled"

const HomePage = () => {
  // const [search, setSearch] = useState<string>("");

  return (
    <Styled.HomeContainer>
      <img src="./homepage.png" alt="Homepage" />
      {/* <SearchInput
        search={search}
        setSearch={setSearch}
        label="Search fore recipes"
      /> */}
      <InfoSection />
    </Styled.HomeContainer>
  );
};

export default HomePage;
