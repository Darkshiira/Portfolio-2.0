import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const Button = styled.button`
    position: absolute;
    top: 48%;
    right: 40%;
    width: 150px;
    height: 50px;
    background: #F0F8FF;
    color: #00091A;
    border: 2px solid lightblue;
    border-radius: 10px;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
    transition: all 0.5s ease-in-out;
    margin: 10px;
    font-size: 20px;

    &:hover {
        background: #00192A;
        cursor: pointer;
        color: #F0F8FF;
    }

    @media (max-width: 768px) {
        left: 40%;
`


const MemoryWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #3B003B;
    color: #F0F8FF;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    
    
    `

const Card = styled.div`
    background: linear-gradient(32deg, rgba(79,34,75,1) 0%, rgba(209,29,253,1) 50%, rgba(245,159,254,1) 100%);
    border-radius: 10px;
    margin: 10px;
    color: #F0F8FF;
    width: 14%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover {
        cursor: pointer;
        border: 2px solid #F0F8FF;

        @media (max-width: 768px) {
            border: none;
        }

    }

    span {
        position: absolute;
        font-size: 100px;
        font-weight: bold;
        color: #F0F8FF;
        visibility: hidden;

        @media (max-width: 768px) {
            font-size: 60px;
        }
  
    }
    

    
    `


const Memory = () => {
    const [size, setSize] = useState(window.innerWidth);
    const [amountofCards, setAmountofCards] = useState(6);
    const [cards, setCards] = useState([]);
    const [play, setPlay] = useState(false);

    useEffect(() => {

        const updateSize = () => {
            setSize(window.innerWidth);
        }

        window.addEventListener('resize', updateSize);
        if (size < 1410) {
            setAmountofCards(5);
        } else {
            setAmountofCards(6);
        }
    }, [size]);

    const playMe = (e) => {
        CreateCards();
        setPlay(true);
    }

    const CreateCards = () => {
        let cardArray = [];
        for (let i = 0; i < amountofCards; i++) {
            cardArray.push(<Card key= {i+0.1} onClick={(e)=>FlipCard(e)}><span>{i}</span></Card>)
            cardArray.push(<Card key= {i + 0.2} onClick={(e)=>FlipCard(e)}><span>{i}</span></Card>)
        }
        for (let i = cardArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = cardArray[i]
            cardArray[i] = cardArray[j]
            cardArray[j] = temp

            setCards(cardArray);
        }
    }

        
    

    const FlipCard = (e) => {

        if (e.target.children[0].style.visibility === "visible") {
            return;
        }
        e.target.removeEventListener("click", FlipCard);
        e.target.children[0].style.visibility = "visible";

        e.target.style.backgroundColor = "##00091A";
        e.target.style.color = "white";
        e.target.style.cursor = "default";
        let flippedCards = document.querySelectorAll("span[style='visibility: visible;']");
        
        if (flippedCards.length === 2) {

            if (flippedCards[0].innerText === flippedCards[1].innerText) {
                flippedCards[0].parentElement.style.background =  "rgb(255,255,255)";
                flippedCards[1].parentElement.style.background = "rgb(255,255,255)";
                flippedCards[0].removeEventListener("click", FlipCard);
                flippedCards[1].removeEventListener("click", FlipCard);
                flippedCards[0].style.visibility = "hidden";
                flippedCards[1].style.visibility = "hidden";

            let cardsLeft = document.querySelectorAll("span[style='visibility: hidden;']");
                if (cardsLeft.length === 12) {
                    alert("You won!");
                }
            }
            else {
                setTimeout(() => {
                    flippedCards[1].addEventListener("click", FlipCard);
                    flippedCards[1].style.visibility = "hidden";
                    flippedCards[0].addEventListener("click", FlipCard);
                    flippedCards[0].style.visibility = "hidden";
                }, 1000);
                
            }
        }

    }


    

  return (
    <MemoryWrapper>
        {cards}
    {play? null : <div><Button onClick = {(e)=> playMe(e)}>Play</Button></div>}
    </MemoryWrapper>
  )

  }
export default Memory;