import React from 'react'
import styled from 'styled-components'
import linkedinimg from '../Media/linkedin.png'
import githubimg from '../Media/github.png'

const Wrapper = styled.div`
background-color: #00091A;
height: 100px;
display: flex;
justify-content: space-between;


h2 {
    color: white;
    margin: 0;
    padding-top: 30px;
}
`

const Images = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-top: 30px;
padding-right: 30px;
`

const Nav = () => {
  return (
    <Wrapper>
        <h2>Hanna Arefiardakani - Fullstackutvecklare</h2>
        <Images><a href="https://www.linkedin.com/in/hanna-arefi-ardakani-b763ba200/"><img alt= "Link to my LinkedIn page"src= {linkedinimg} width="40px" height="40px"></img></a> <a href="https://github.com/Darkshiira"><img alt = "Link to my github page"src= {githubimg} width="40px" height="40px"></img></a></Images>
    </Wrapper>
  )
}

export default Nav