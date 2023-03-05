import React, { useState, useEffect } from "react";
import AuthButton from "../common/AuthButton";
import { useQuery } from "../hooks/useQuery";
import { projectService } from "../services/projectsService";
import * as Styled from "../styles/project.styled";
import { IUsersState } from "../types/auth.types";
import { IProjects } from "../types/project.types";

const ProjectPage = () => {
  const [waitingUsers, setWaitingUsers] = useState<IUsersState[]>([]);
  const [projectData, setProjectData] = useState<IProjects>();
  const query = useQuery();

  const projectId = query.get("projectId");

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token && projectId) {
      projectService
        .getProjectById(token, projectId)
        .then((res) => res && setProjectData(res.project));
    }
  }, [projectId]);

  const userId = localStorage.getItem("USER_ID");

  const handleusersClick = () => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token && projectId) {
      projectService
        .getProjectWaitingUsers(token, projectId)
        .then((res) => res && setWaitingUsers(res));
    }
  };

  return (
    <Styled.ProjectContainer>
      <Styled.ProjectBox>
        <Styled.Title>{projectData?.name}</Styled.Title>
        <span>
          {userId &&
            typeof +userId === "number" &&
            projectData?.members.includes(+userId) &&
            "It's Your Projects :)"}
        </span>
        <Styled.RegularData>
          <b>Maximum amount of member: </b>
          {projectData?.max_members}
        </Styled.RegularData>
        <Styled.RegularData>
          <b>Stack: </b>
          {projectData?.project_stack.join(" ")}
        </Styled.RegularData>
        <Styled.RegularData>
          <b>Description: </b>
          {projectData?.description}
        </Styled.RegularData>
        <Styled.RegularData>
          <b>Waiting approve :</b>
          {projectData?.description}
        </Styled.RegularData>

        <Styled.ButtonWrapper>
          <AuthButton type="button" title="Join!" />
        </Styled.ButtonWrapper>
        {userId && projectData?.founder === +userId && (
          <Styled.ButtonWrapper>
            <AuthButton
              handleClick={handleusersClick}
              type="button"
              title="Users waiting for approve"
            />
          </Styled.ButtonWrapper>
        )}
      </Styled.ProjectBox>
    </Styled.ProjectContainer>
  );
};

export default ProjectPage;
