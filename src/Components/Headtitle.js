import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const OutsideWrapper = styled.div`
    background: #4D004D;
    color: #F0F8FF;
    width: 100vw;
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;`

const Card = styled.div`
    background:#00091A ;
    color: #F0F8FF;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    border: 2px solid lightblue;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
    transition: all 0.5s ease-in-out;
    
    &:hover {
        background:#00192A;
        cursor: pointer;`

const Headtitle = () => {
    const [flip1, setFlip1] = useState(false)
    const [flip2, setFlip2] = useState(false)
    const [flip3, setFlip3] = useState(false)


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
        {flip1 ? <Card onClick={(e) => flipthecard1(e)}><h1>Frontend</h1></Card> : <Card onClick={(e) => flipthecard1(e)}><h3>HTML</h3><h3>CSS/SCSS</h3><h3>React</h3></Card>}
        {flip2 ? <Card onClick={(e) => flipthecard2(e)}><h1>Database</h1></Card> : <Card onClick={(e) => flipthecard2(e)}><h3>MySQL</h3></Card>}
        {flip3 ? <Card onClick={(e) => flipthecard3(e)}><h1>Backend</h1></Card> : <Card onClick={(e) => flipthecard3(e)}><h3>Express server</h3></Card>}
    </Wrapper>
    </OutsideWrapper>
  
    </>
    )
}

export default Headtitle