import React from 'react'
import img from '../Media/Whatever.gif'
import styled from 'styled-components'

const Animationdiv = styled.div`
    width: 1000px;
    height: 500px;
    background-image: url(${img});
`


const Animation = () => {
  return (
    <Animationdiv>Animation</Animationdiv>
  )
}

export default Animation;