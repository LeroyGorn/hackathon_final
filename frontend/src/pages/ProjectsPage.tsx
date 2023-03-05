import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthButton from "../common/AuthButton";
import ProjectCard from "../components/projectCard";
import * as Styled from "../styles/projects.styled";
import { projectService } from "../services/projectsService";
import { get, showProjects } from "../redux/slices/projects-slice";

const ProjectsPage = () => {
  const data = useSelector(showProjects);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token)
      projectService
        .getProjects(token)
        .then((res) => res && dispatch(get(res)));
  }, [dispatch]);

  const handleClick = () => {
    navigate("/createproject");
  };

  return (
    <Styled.ProjectsContainer>
      <div className="wrapper">
        <AuthButton
          type="button"
          title="Create New Project"
          handleClick={handleClick}
        />
        {data.map((card, idx) => (
          <ProjectCard {...card} key={idx} />
        ))}
      </div>
      <img
        className="projects-image"
        src="./images/projects.svg"
        alt="Projects"
      />
    </Styled.ProjectsContainer>
  );
};

export default ProjectsPage;
