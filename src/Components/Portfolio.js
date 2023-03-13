import React from 'react'
import styled from 'styled-components'
import Calc from '../Media/Calculator.png'
import githubimg from '../Media/github.png'
import Project1 from '../Media/Project1.png'
import OldPor from '../Media/Oldportfolio.png'
import Reactpro from '../Media/Reactproject.png'
import Backend from '../Media/Projectbackend.png'

const OuterWrapper = styled.div`
    height: 250vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    

    @media (max-width: 1900px) {
        height: 350vh;
    }

    @media (max-width: 1600px) {
        height: 400vh;
    }

    @media (max-width: 1200px) {
        height: 500vh;
    }

    @media (max-width: 768px) {
        height: 400vh;
    }

    `
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center;
    width: 100%;
    height: 100%;

    @media (max-width: 1400px) {
        height: 100%;

    }
    
    `

const Card1 = styled.div`
    width: 1000px;
    background: #84321f;
    color: #F0F8FF;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
    

    @media (max-width: 768px) {
        width: 90%;

        h2 {
            font-size: 20px;
        }
    }
    `

    const TopCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    background-color:#6B2919; 

    @media (max-width: 768px) {
        width 100%;
    }
    `

const Card2 = styled.div`
    background:#84321f;
    width: 500px;
    height: 500px;
    color: #F0F8FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);

    @media (max-width: 768px) {
        width: 90%;

        h2 {
            font-size: 20px;
        }
    }
    `

const Card2div = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `

    const Image = styled.img`
    border: 6px inset #6B2919;
    border-radius: 10px;

    @media (max-width: 1400px) {
        width: 450px;
        height: 300px;
    }

    @media (max-width: 768px) {
        width: 300px;
        height: 200px;
    }

    @media (max-width: 300px) {
        width: 200px;
        height: 150px;
    }
    `

const Portfolio = () => {
  return (
    <OuterWrapper>
        <Wrapper>
            <Card1><TopCard><a href="https://github.com/Darkshiira/Calculator"><img height= "30px" width="30px"alt="link to my github"src={githubimg}></img></a></TopCard>

                <h2>Some useful apps:</h2><a href="https://darkshiira.github.io/Calculator/"><Image height="400px" width="800px" alt="bunch of programs that I made" src= {Calc}></Image></a></Card1>
            <Card2><TopCard><a href="https://github.com/Darkshiira/Examinationsuppgift---Frontend2---HTML-CSS"><img height= "30px" width="30px"alt="link to my github"src={githubimg}></img></a></TopCard><Card2div><h2>Project we had in HTML/CSS class:</h2><Image height="200px" width="400px" alt="First project I made" src= {Project1}></Image></Card2div></Card2>
        </Wrapper>
        <Wrapper>
            <Card2><TopCard><a href="https://github.com/Darkshiira/Portfolio"><img height= "30px" width="30px"alt="link to my github"src={githubimg}></img></a></TopCard><Card2div><h2>My old Portfolio:</h2><a href="https://darkshiira.github.io/Portfolio/"><Image height="200px" width="400px" alt="My old Portfolio" src= {OldPor}></Image></a></Card2div></Card2>
            <Card1><TopCard><a href="https://github.com/Darkshiira/examinationsuppgift-react"><img height= "30px" width="30px"alt="link to my github"src={githubimg}></img></a></TopCard><h2>Project we had in React- class:</h2><Image height="400px" width="700px" alt="Project from react-class" src= {Reactpro}></Image></Card1>
        </Wrapper>
        <Wrapper>
            <Card1>
                <TopCard>
                    <a href="https://github.com/Darkshiira/Backend---individuell-uppgift"><img height= "30px" width="30px"alt="link to my github"src={githubimg}></img></a>
                </TopCard>
                    <h2>Backend project:</h2>
                    <Image height="400px" width="700px" alt="Project from backend-class" src= {Backend}></Image>
            </Card1>
        </Wrapper>
    </OuterWrapper>
  )
}

export default Portfolio