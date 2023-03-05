import React from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../common/AuthButton";
import ProjectCard from "../components/projectCard";
import * as Styled from "../styles/projects.styled"

const AboutPage = () => {
  const navigate = useNavigate()

  const mock = [
    {
      id: 1,
      name: "Hackathon",
      description: " Welcome to your user profile page! This is where you can showcase your skills, experience, and contributions to the community. Update your profile picture and bio to introduce yourself to other members. You can also add your skills and areas of expertise to help others find you when searching for teammates. Keep track of your projects and contributions using our built-in tools, and connect with other members by sending messages and joining teams.",
      is_open: true,
      max_members: 100,
      project_stack: [
        "Django",
        "PostgreSQL",
        "Java"
      ]
    },
    {
      id: 2,
      name: "Hackathon",
      description: " Welcome to your user profile page! This is where you can showcase your skills, experience, and contributions to the community. Update your profile picture and bio to introduce yourself to other members. You can also add your skills and areas of expertise to help others find you when searching for teammates. Keep track of your projects and contributions using our built-in tools, and connect with other members by sending messages and joining teams.",
      is_open: true,
      max_members: 100,
      project_stack: [
        "Django",
        "PostgreSQL",
        "Java"
      ]
    },
    {
      id: 2,
      name: "Hackathon",
      description: " Welcome to your user profile page! This is where you can showcase your skills, experience, and contributions to the community. Update your profile picture and bio to introduce yourself to other members. You can also add your skills and areas of expertise to help others find you when searching for teammates. Keep track of your projects and contributions using our built-in tools, and connect with other members by sending messages and joining teams.",
      is_open: true,
      max_members: 100,
      project_stack: [
        "Django",
        "PostgreSQL",
        "Java"
      ]
    }
  ]

  const handleClick = () => {
    navigate('/createproject')
  }

  return (
    <Styled.ProjectsContainer>
      <div className="wrapper">
        <AuthButton type="button" title="Create New Project" handleClick={handleClick}/>
        {mock.map((card) => <ProjectCard {...card} key={card.id} />)}
      </div>
      <img className="projects-image" src="./images/projects.svg" alt="Projects" />
    </Styled.ProjectsContainer>
  );
};

export default AboutPage;