import React, { useState, useEffect } from "react";
import { useQuery } from "../hooks/useQuery";
import { projectService } from "../services/projectsService";
import * as Styled from "../styles/project.styled";
import { IProjects } from "../types/project.types";

const ProjectPage = () => {
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

  console.log(projectData);

  return (
    <Styled.ProjectContainer>
      <Styled.ProjectBox>
        <Styled.Title>{projectData?.name}</Styled.Title>

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
      </Styled.ProjectBox>
    </Styled.ProjectContainer>
  );
};

export default ProjectPage;
