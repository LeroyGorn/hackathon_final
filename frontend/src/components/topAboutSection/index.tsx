import React from 'react'
import * as Styled from '../../styles/about.styled'

const TopSection = () => {
  return (
    <Styled.TopSection>
      <div className='content-wrapper'>
      <h2 className='title'>Who we are?</h2>
      <p className='description'>
        The project is a website designed to connect individuals looking for teammates to collaborate with on projects. Whether you are a freelancer, entrepreneur, or simply looking to expand your network, our platform offers a unique opportunity to connect with like-minded individuals from all over the world.
      </p>
      </div>
      <img src="./images/about.svg" alt="Team" />
    </Styled.TopSection>
  )
}

export default TopSection