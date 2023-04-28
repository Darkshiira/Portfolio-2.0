import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import backend from '../Media/backend.png'
import frontend from '../Media/front-end.png'
import database from '../Media/database.png'

const OutsideWrapper = styled.div`
    background: #84321f;
    color: #F0F8FF;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    
    justify-content: center;
    align-items: center;

    @media (max-width: 1400px) {

        height: 100vh;
    }

    `


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 90%;

    @media (max-width: 768px) {
        flex-direction: column;
        }
    `

const Card = styled.div`
    background:lightyellow ;
    color: #00192A;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid yellow;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
    transition: all 0.5s ease-in-out;
    
    &:hover {
        color: #F0F8FF;
        background:#00192A;
        cursor: pointer;
    }
    
    img {
        width: 100px;
        height: 100px;
    }

    @media (max-width: 1400px) {

        height: 200px;
    }

    @media (max-width: 768px) {
        padding: 2px;
        width: 90%;
        height: 100px;

        h1{
            font-size: 1rem;
        }

        h3{
            font-size: 0.5rem;
            
        }

        img {
            width: 50px;
            height: 50px;
        }
        }`

const Headtitle = () => {
    const [flip1, setFlip1] = useState(true)
    const [flip2, setFlip2] = useState(true)
    const [flip3, setFlip3] = useState(true)


    const flipthecard1 = (e) => {
        e.preventDefault();
        if (flip1 === false) {
            setFlip1(true)
        } else {
            setFlip1(false)
        }
    }

    const flipthecard2 = (e) => {
        e.preventDefault();
        if (flip2 === false) {
            setFlip2(true)
        } else {
            setFlip2(false)
        }
    }

    const flipthecard3 = (e) => {
        e.preventDefault();
        if (flip3 === false) {
            setFlip3(true)
        } else {
            setFlip3(false)
        }
    }


  return (
    <>
    <OutsideWrapper>
    <Wrapper>
        {flip1 ? <Card onClick={(e) => flipthecard1(e)}><img alt="frontend" src={frontend}/></Card> : <Card onClick={(e) => flipthecard1(e)}><h1>Frontend</h1><h3>HTML</h3><h3>CSS/SCSS</h3><h3>React</h3></Card>}
        {flip2 ? <Card onClick={(e) => flipthecard2(e)}><img alt="database" src={database}/></Card> : <Card onClick={(e) => flipthecard2(e)}><h1>Database</h1><h3>MySQL</h3><h3>MongoDB</h3></Card>}
        {flip3 ? <Card onClick={(e) => flipthecard3(e)}><img alt="backend" src={backend}/></Card> : <Card onClick={(e) => flipthecard3(e)}><h1>Backend</h1><h3>Express server</h3></Card>}
    </Wrapper>
    </OutsideWrapper>
  
    </>
    )
}

export default Headtitle