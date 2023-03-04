import React from 'react'
import { InfoSectionData } from './mockedData'
import InfoCard from './InfoCard'
import * as Styled from '../../styles/infoSection.styled'

const InfoSection = () => {
  return (
    <Styled.InfoSectionContainer>
      {InfoSectionData.map((card, index) => <InfoCard {...card} key={index} />)}
    </Styled.InfoSectionContainer>
  )
}

export default InfoSection