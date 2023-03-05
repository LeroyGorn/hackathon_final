import React from "react";
import UserCard from "../components/userCard";
import * as Styled from "../styles/users.styled"

const AboutPage = () => {
  const mock = [
    {
      id: 1,
      name: "Ostap Tudy",
      experience: "Welcome to your user profile page! This is where you can showcase your skills, experience, and contributions to the community. Update your profile picture and bio to introduce yourself to other members. You can also add your skills and areas of expertise to help others find you when searching for teammates. Keep track of your projects and contributions using our built-in tools, and connect with other members by sending messages and joining teams.",
      user_stack: [
        "Django",
        "PostgreSQL",
        "Java"
      ]
    },
    {
      id: 2,
      name: "Pylyp Perl",
      experience: "Welcome to your user profile page! This is where you can showcase your skills, experience, and contributions to the community. Update your profile picture and bio to introduce yourself to other members. You can also add your skills and areas of expertise to help others find you when searching for teammates. Keep track of your projects and contributions using our built-in tools, and connect with other members by sending messages and joining teams.",
      user_stack: [
        "Django",
        "PostgreSQL",
        "Java"
      ]
    },
    {
      id: 2,
      name: "Leonid Titka",
      experience: "Welcome to your user profile page! This is where you can showcase your skills, experience, and contributions to the community. Update your profile picture and bio to introduce yourself to other members. You can also add your skills and areas of expertise to help others find you when searching for teammates. Keep track of your projects and contributions using our built-in tools, and connect with other members by sending messages and joining teams.",
      user_stack: [
        "Django",
        "PostgreSQL",
        "Java"
      ]
    },
    {
      id: 4,
      name: "Katrya Privit",
      experience: "Welcome to your user profile page! This is where you can showcase your skills, experience, and contributions to the community. Update your profile picture and bio to introduce yourself to other members. You can also add your skills and areas of expertise to help others find you when searching for teammates. Keep track of your projects and contributions using our built-in tools, and connect with other members by sending messages and joining teams.",
      user_stack: [
        "Django",
        "PostgreSQL",
        "Java"
      ]
    },
  ]

  return (
    <Styled.UsersContainer>
      <div className="wrapper">
        {mock.map((user) => <UserCard {...user} key={user.id}/>)}
      </div>
      <img className="users-image" src="./images/users.svg" alt="Projects" />
    </Styled.UsersContainer>
  );
};

export default AboutPage;