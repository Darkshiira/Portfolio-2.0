import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding-top: 150px;
    color: #F0F8FF;
    width: 100vw;
    height: 20vh;
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
      <h2><a href="mailto:darkshiira@hotmail.com">darkshiira@hotmail.com</a></h2>
   </Wrapper>
  )
}

export default Contact