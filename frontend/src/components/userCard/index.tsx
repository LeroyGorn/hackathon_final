import React from 'react'
import AuthButton from '../../common/AuthButton'
import * as Styled from "../../styles/projects.styled"
import { IUserCardProps } from '../../types/userCard.types'

const UserCard = ({name, experience, user_stack}: IUserCardProps) => {
  return (
    <Styled.CardWrapper>
      <h2 className='user-name'>{name}</h2>
      <p className='user-experience'><span className='bold-text'>Description: </span>{experience}</p>
      <div className='bottom-wrapper'>
        <p>
        <span className='bold-text'>User Stack: </span>
        {user_stack.map((item) => <span>{item}/</span>)}
        </p>
        <AuthButton type='button' title='CV'/> 
      </div>
    </Styled.CardWrapper>
  )
}

export default UserCard