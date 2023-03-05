import React from 'react'
import AuthButton from '../../common/AuthButton'
import { IProjectCardProps } from '../../types/projectCard.types'
import * as Styled from "../../styles/projects.styled"

const ProjectCard = ({name, description, project_stack, max_members}: IProjectCardProps) => {
  return (
    <Styled.CardWrapper>
      <div className='top-wrapper'>
        <h2 className='project-name'>{name}</h2>
        <p><span className='bold-text'>Required members: </span>{max_members}</p>
      </div>
      <p className='project-description'><span className='bold-text'>Description: </span>{description}</p>
      <div className='bottom-wrapper'>
        <p>
        <span className='bold-text'>Project Stack: </span>
        {project_stack.map((item) => <span>{item}/</span>)}
        </p>
        <AuthButton type='button' title='Join'/> 
      </div>
    </Styled.CardWrapper>
  )
}

export default ProjectCard