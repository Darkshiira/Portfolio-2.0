import React from 'react'
import styled from 'styled-components'
import Calc from '../Media/Calculator.png'
import githubimg from '../Media/github.png'
import Project1 from '../Media/Project1.png'
import OldPor from '../Media/Oldportfolio.png'
import Reactpro from '../Media/Reactproject.png'

const OuterWrapper = styled.div`
    height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `

const Card1 = styled.div`
    width: 1000px;
    background: linear-gradient(172deg, rgba(77,0,77,1) 0%, rgba(20,3,24,1) 100%);
    padding: 20px;
    color: #F0F8FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
    `
const Card2 = styled.div`
    background:linear-gradient(172deg, rgba(77,0,77,1) 0%, rgba(20,3,24,1) 100%);
    width: 500px;
    height: 500px;
    padding: 20px;
    color: #F0F8FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
    `

const Portfolio = () => {
  return (
    <OuterWrapper>
        <Wrapper>
            <Card1><a href="https://github.com/Darkshiira/Calculator"><img height= "30px" width="30px"alt="link to my github"src={githubimg}></img></a><h2>Some useful apps:</h2><a href="https://darkshiira.github.io/Calculator/"><img height="400px" width="800px" alt="bunch of programs that I made" src= {Calc}></img></a></Card1>
            <Card2><a href="https://github.com/Darkshiira/Examinationsuppgift---Frontend2---HTML-CSS"><img height= "30px" width="30px"alt="link to my github"src={githubimg}></img></a><h2>Project we had in HTML/CSS class:</h2><img height="200px" width="500px" alt="First project I made" src= {Project1}></img></Card2>
        </Wrapper>
        <Wrapper>
            <Card2><a href="https://github.com/Darkshiira/Portfolio"><img height= "30px" width="30px"alt="link to my github"src={githubimg}></img></a><h2>My old Portfolio:</h2><a href="https://darkshiira.github.io/Portfolio/"><img height="200px" width="500px" alt="My old Portfolio" src= {OldPor}></img></a></Card2>
            <Card1><a href="https://github.com/Darkshiira/examinationsuppgift-react"><img height= "30px" width="30px"alt="link to my github"src={githubimg}></img></a><h2>Project we had in React- class:</h2><img height="400px" width="800px" alt="Project from react-class" src= {Reactpro}></img></Card1>
        </Wrapper>
    </OuterWrapper>
  )
}

export default Portfolio