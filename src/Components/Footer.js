import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Foot = styled.div`
    padding-top: 50px;
    background-color: #84321f;
    color: #F0F8FF;
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    // @media (max-width: 1400px) {
    //     flex-direction: column;
    // }

    // @media (max-width: 768px) {
    //     flex-direction: column;
    // }
    `
const Attributefront = styled.div`
    background:lightyellow;
    width: 500px;
    color: #00192A;
    height: 250px;
    border: 1px solid yellow;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :hover {
        color: #F0F8FF;
        background:#00192A;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width:  90%;
    }
    `
const Attribute = styled.div`
    color: #F0F8FF;
    background-color:#6B2919;
    height: 250px;
    width: 500px;
    border: 2px solid yellow;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    margin: 10px;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    
    a {
        color: #F0F8FF;
        text-decoration: none;
    }

    a:hover {
        color: #F0F;
    }

    @media (max-width: 768px) {
        width: 90%;
    `


const Footer = () => {
    const [icons, setIcons] = useState(true);

    const fliptheCard = (e) => {
        e.preventDefault();
        if (icons) {
            setIcons(false);
        }
        else {
            setIcons(true);
        }
    }


  return (
    <Foot>
        <h1>Thank you for visiting!</h1>
    {icons ? <Attributefront onClick= {(e) => fliptheCard(e)}><h2>Icons made by:</h2></Attributefront> :
    <Attribute onClick={(e) => fliptheCard(e)}>
    
    <a href="https://www.flaticon.com/free-icons/front-end" title="front end icons">Front end icons created by Muhammad Ali - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/photo" title="photo icons">Photo icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/calculator" title="calculator icons">Calculator icons created by srip - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/folder" title="folder icons">Folder icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Those Icons - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/window" title="window icons">Window icons created by Payungkead - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/video" title="video icons">Video icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/power" title="power icons">Power icons created by Uniconlabs - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Roundicons - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Ruslan Babkin - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/backend" title="backend icons">Backend icons created by Muhammad Ali - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/backend" title="backend icons">Backend icons created by Ehtisham Abid - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/rat" title="rat icons">Rat icons created by Icongeek26 - Flaticon</a>
    <a href="https://www.freepik.com/free-vector/three-wooden-bookshelves-with-various-books-flat-set-web-design_12699863.htm#page=2&query=background%20illustrated%20bookshelf&position=8&from_view=search&track=ais">Image by pch.vector - on Freepik</a> 
    </Attribute>}
    </Foot>
    )
}

export default Footer