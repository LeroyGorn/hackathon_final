import React from 'react'
import { ICardProps } from '../../types/infoCard.types'
import * as Styled from '../../styles/infoSection.styled'
import AuthButton from '../../common/AuthButton'

const InfoCard = ({title, description, buttonText}: ICardProps) => {
  return (
    <Styled.Card>
      <h3 className='title'>{title}</h3>
      <p className='description'>{description}</p>
      <AuthButton type='button' title={buttonText} />
    </Styled.Card>
  )
}

export default InfoCard