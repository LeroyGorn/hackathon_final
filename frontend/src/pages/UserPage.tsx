import React, { useState, useEffect } from "react";
import { useQuery } from "../hooks/useQuery";
import { usersService } from "../services/usersService";
import {
  ProjectBox,
  ProjectContainer,
  RegularData,
  Title,
} from "../styles/project.styled";
import { IUsersState } from "../types/auth.types";

const UserPage = () => {
  const [userData, setUserData] = useState<IUsersState>();
  const query = useQuery();

  const userId = query.get("userId");

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token && userId) {
      usersService
        .getUserById(userId, token)
        .then((res) => res && setUserData(res.summary));
    }
  }, [userId]);

  return (
    <ProjectContainer>
      <ProjectBox>
        <Title>{`${userData?.user.first_name} ${userData?.user.last_name}`}</Title>
        <RegularData>
          <b>Stack: </b>
          {userData?.tech_stack.join(" ")}
        </RegularData>
        <br />
        <RegularData>
          <b>Education: </b>
          {userData?.education}
        </RegularData>
        <br />
        <RegularData>
          <b>Work Expreriance: </b>
          {userData?.work_experience}
        </RegularData>
      </ProjectBox>
    </ProjectContainer>
  );
};

export default UserPage;
