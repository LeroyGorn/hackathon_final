import React from 'react'
import { InfoSectionData } from './mockedData'

const InfoSection = () => {
  return (
    <>
    {
      InfoSectionData.map((card) => {
        return <div>{card.title}</div>
      })
    }
    </>
  )
}

export default InfoSection