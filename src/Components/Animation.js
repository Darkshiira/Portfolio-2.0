import React from 'react'
import img from '../Media/Whatever.gif'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Animationdiv = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img});
`

const Information = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightblue;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`



const Animation = () => {
const [animation, setAnimation] = useState(true)
const [size, setSize] = useState(window.innerWidth);

useEffect(() => {
    
    const updateSize = () => {
        setSize(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);
    if (size < 1420) {
        setAnimation(false)
    } else {
        setAnimation(true);
    }
}, [size]);


  return (
    <>
    {animation ? <Animationdiv>Animation</Animationdiv> : <Information><h1>Screen to small for animation</h1><p>Please try on computer instead</p></Information>}
    </>)
}

export default Animation;