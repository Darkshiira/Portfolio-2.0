import React from 'react'
import styled from 'styled-components'
import Screen from './Screen'
import { useState } from 'react'
import img from '../Media/power-on.png'
import bookshelf1 from '../Media/bookshelf1.png'
import bookshelf2 from '../Media/bokkshelf2.png'




const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
`

const Image = styled.img`
    position: absolute;
    top: 50px;
    right: 0px;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 600px;
    height: 300px;

    @media (max-width: 1400px) {
        width: 300px;
        height: 150px;
    }

    @media (max-width: 768px) {
        display: none;
    }

`

const Image2 = styled.img`
    position: absolute;
    top: 250px;
    left: -50px;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 600px;
    height: 300px;

    @media (max-width: 1400px) {
        width: 300px;
        height: 150px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const Computerdiv = styled.div`
    position: relative;
    border : 2px solid black;
    width: 60%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
    z-index: 1;

    img:hover {
        cursor: pointer;
    }
    
    @media (max-width: 768px) {
        width: 90%;
        height: 50%;
`
const Screendiv = styled.div`
    position: relative;
    border : 2px solid black;
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    box-shadow: 0px 0px 0px 8px #000000, 0px 0px 0px 16px #4B4C4B, 0px 0px 0px 24px #828482, 0px 0px 0px 31px #B2B5B2, 0px 0px 0px 39px #DADDDA, 5px 5px 15px 5px rgba(0,0,0,0);
`
const Legdiv = styled.div`
    border : 2px solid black;
    width: 10%;
    height: 15%;
    background-color: grey;
    `

const Footdiv = styled.div`
    border : 2px solid black;
    width: 50%;
    height: 50px;
    background-color: grey;
    z-index: 1;`

const Power = styled.img`
    z-Index: 2;
    position: absolute;
    bottom: 0px;
    right: 49%;
    `



const Computer = () => {

    const [animation, setAnimation] = useState(false)

    const DoTheAnimation = (e) => {
        e.preventDefault();

        if (animation === false) {
            setAnimation(true)
        } else {
            setAnimation(false)
        }

    }

  return (
    <Wrapper>
        <Image src= {bookshelf1} alt="bookshelf" />
        <Image2 src= {bookshelf2} alt="bookshelf" />
        <Computerdiv>
            <Screendiv>
            {animation ? <Screen/> : null}
            
            </Screendiv>
            <Power src={img} alt="power the computer" height="40px" width="40px" onClick={(e) => DoTheAnimation(e)}></Power>
        </Computerdiv>
        
        <Legdiv>
        </Legdiv>
        <Footdiv></Footdiv>

    </Wrapper>
  )
}

export default Computer