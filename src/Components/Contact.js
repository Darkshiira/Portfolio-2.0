import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding-top: 150px;
    color: #F0F8FF;
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: #F0F8FF;
        text-decoration: none;
    }

    a:hover {
        color: #F0F;
    }

    @media (max-width: 1400px) {
        height: 100vh;
    }

    @media (max-width: 768px) {
       font-size: 8px;
       height: 100px;
    }
    `


const Contact = () => {
  return (
   <Wrapper>
   <h1>
        Find me interesting?
   </h1>
    <h2>
        Contact me!
    </h2>
      <h2><a href="mailto:Hanna.Arefiardakani@yh.nackademin.se">Hanna.Arefiardakani@yh.nackademin.se</a></h2>
   </Wrapper>
  )
}

export default Contact