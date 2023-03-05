import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/userCard";
import { get, showUsers } from "../redux/slices/users-slice";
import { usersService } from "../services/usersService";
import * as Styled from "../styles/users.styled";

const AboutPage = () => {
  const data = useSelector(showUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      usersService.getUsers(token).then((res) => res && dispatch(get(res)));
    }
  }, [dispatch]);

  return (
    <Styled.UsersContainer>
      <div className="wrapper">
        {data.map(
          ({
            user,
            education,
            tech_stack,
            work_experience,
            years_experience,
          }) => (
            <UserCard
              id={user.id}
              education={education}
              years_experience={years_experience}
              experience={work_experience}
              user_stack={tech_stack}
              name={`${user.first_name} ${user.last_name}`}
              key={user.id}
            />
          )
        )}
      </div>
      <img className="users-image" src="./images/users.svg" alt="Projects" />
    </Styled.UsersContainer>
  );
};

export default AboutPage;
