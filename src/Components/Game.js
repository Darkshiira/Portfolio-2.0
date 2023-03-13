import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import img from '../Media/rat.png'

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
`

const Giantbox = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
`

const Image = styled.img`
    width: 19px;
    height: 19px;
    position: absolute;
    top: -10px;
    left: -10px;
    visibility: hidden;
`

const Box = styled.div`
    width: 19px;
    height: 19px;
    border: 1px solid black;
    background-color: white;
    position: relative;
    margin: 0 1px;
`

const Game = () => {
    const [gameover, setGameover] = useState(false)
    const [ouch, setOuch] = useState(0)
    const [boxes, setBoxes] = useState([])
    const[click, setClick] = useState(0)
    const [step, setStep] = useState(['up', 'down', 'left', 'right'])
    const [randomnumber, setRandomnumber] = useState([])
    const [size, setSize] = useState(window.innerWidth);
    const [game, setGame] = useState(true);

   
    useEffect(() => {
    
        const updateSize = () => {
            setSize(window.innerWidth);
        }
    
        window.addEventListener('resize', updateSize);
        if (size < 1420) {
            setGame(false)
        } else {
            setGame(true);
        }
    }, [size]);
    
    useEffect(() => {

        const makeDark = (e) => {
            if (e.target.children[0] === undefined) {
                return
            }
            else if (e.target.style.backgroundColor === 'black') {
                return
            }
            e.target.style.backgroundColor = 'black';
            let count = click;
            setClick(count => count + 1);
            
        } 

        const printBoxes = () => {
            let boxes = []
            if (click === 0) {
            let randomnumber = Math.floor(Math.random() * 204)
            setRandomnumber(randomnumber)
            for (let i = 0; i < 204; i++) {
                if (i === randomnumber) {
                boxes.push(<Box key= {i} onClick={(e)=> makeDark(e)}><Image style = {{visibility:"visible"}}id={i+0.1} src={img}/></Box>)
                } else {
                    boxes.push(<Box key= {i} onClick={(e)=> makeDark(e)}><Image id={i+0.1} src={img}/></Box>)
                }
    
            }
             setBoxes(boxes);
        
            }   
            
    
        else {
            
            let pain = ouch;
            let downstep = ((randomnumber+0.1) + 17);
            let upstep = ((randomnumber+0.1) - 17);
            let leftstep = ((randomnumber+0.1) - 1);
            let rightstep = ((randomnumber+0.1) + 1);
            if (ouch > 4) {
                setGameover(true)
                return
            }
            let randomstep = Math.floor(Math.random() * 4);

            switch(step[randomstep]) {
            case 'up':
                if (upstep < 0) {
                    setOuch(pain = pain + 1)
                    break;
                }
                
                if(document.getElementById(upstep) === null)
                {setOuch(pain = pain + 1)

                break;}
    
                 
                if (document.getElementById((randomnumber+0.1)-17).parentNode.style.backgroundColor === 'black')
                { 
                                setOuch(pain = pain + 1)

    
                        if (document.getElementById(downstep).parentNode.style.backgroundColor === '') {
                            if (downstep > 204) {
                                setOuch(pain = pain + 1);
                                break;
                            }
                            document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                                document.getElementById(downstep).style.visibility = 'visible';
                                setRandomnumber(randomnumber + 17);
                            break;}
                        else if (document.getElementById(leftstep).parentNode.style.backgroundColor === '') {
                            if (leftstep > 204) {
                                setOuch(pain = pain + 1);
                                break;
                            }

                            document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                                document.getElementById(leftstep).style.visibility = 'visible';
                                setRandomnumber(randomnumber - 1);
                            break;}
                        else if (document.getElementById(rightstep).parentNode.style.backgroundColor === '') {
                            if (rightstep > 204) {
                                setOuch(pain = pain + 1);
                                break;
                            }
                            document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                                document.getElementById(rightstep).style.visibility = 'visible'
                                setRandomnumber(randomnumber + 1);
                            break;}
                        else {
                            setGameover(true)
                            break;
                        }
                }
            else if (document.getElementById((randomnumber+0.1) - 17).parentNode.style.backgroundColor === ''){
                document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                
                document.getElementById((randomnumber -17)+0.1).style.visibility = 'visible';
                setRandomnumber(randomnumber - 17);
    
                break;
                
            }
            else {

    
                break;
            }
        
            case 'down':
    
                if (downstep > 204) {
                    setOuch(pain = pain + 1);
                    break;
                }
                if(document.getElementById(downstep)=== null)
                {setOuch(pain = pain + 1)
                break;}
                 
                    if (document.getElementById((randomnumber+0.1)+17).parentNode.style.backgroundColor === 'black'|| document.getElementById((randomnumber+0.1)+17) === null || document.getElementById((randomnumber+0.1)+17).parentNode === null || document.getElementById((randomnumber+0.1)+17) === undefined) {
                        setOuch(pain = pain + 1)
                        if (document.getElementById(upstep) === null) {
                            setOuch(pain = pain + 1);
                            break;}
                        if (document.getElementById(upstep).parentNode.style.backgroundColor === '') {
                            if(upstep < 0) {
                                setOuch(pain = pain + 1);
                                break;
                            }
                        document.getElementById(randomnumber+0.1).style.visibility = 'hidden';

                            document.getElementById(upstep).style.visibility = 'visible';
                            setRandomnumber(randomnumber - 17);
                        break;}
                        else if (document.getElementById(leftstep).parentNode.style.backgroundColor === '') {
                            if (leftstep < 0) {
                            setOuch(pain = pain + 1);
                                break;
                            }
                            
                        document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                            document.getElementById(leftstep).style.visibility = 'visible';
                            setRandomnumber(randomnumber - 1);
                        break;}
                        else if (document.getElementById(rightstep).parentNode.style.backgroundColor === '') {
                            if (rightstep > 204) {
                                setOuch(pain = pain + 1);
                                break;
                            }
                            
                        document.getElementById(randomnumber+0.1).style.visibility = 'hidden';

                            document.getElementById(rightstep).style.visibility = 'visible';
                            setRandomnumber(randomnumber + 1);
                        break;}
                        else {
                            setGameover(true)
                            break;
                        }
    
                }
            else if (document.getElementById((randomnumber+0.1) + 17).parentNode.style.backgroundColor === '') {
                
             document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                document.getElementById((randomnumber +17)+0.1).style.visibility = 'visible';
                setRandomnumber(randomnumber + 17);
    
                break;
             }
            else {

            break;
            }
        
    
            case 'left':
                if (leftstep < 0) {
                    setOuch(pain = pain + 1);
                    break;
                }
            
                  if(document.getElementById(leftstep) === null)
                {setOuch(pain = pain + 1)

                break;}         
                            if (document.getElementById((randomnumber+0.1)-1).parentNode.style.backgroundColor === 'black' || document.getElementById((randomnumber+0.1)-1) === null || document.getElementById((randomnumber+0.1)-1).parentNode === null || document.getElementById((randomnumber+0.1)-1) === undefined) {
                                setOuch(pain = pain + 1)

                                if (document.getElementById(upstep) === null) {
                                    setOuch(pain = pain + 1);
                                    break;}
                                if (document.getElementById(upstep).parentNode.style.backgroundColor === '') {
                                    if (upstep < 0) {
                                        setOuch(pain = pain + 1);
                                        break;
                                    }

                                    document.getElementById(upstep).style.visibility = 'visible';
                                    setRandomnumber(randomnumber - 17);
                                    
                                document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                                break;}
                                else if (document.getElementById(leftstep).parentNode.style.backgroundColor === '') {
                                    if (leftstep < 0) {
                                        setOuch(pain = pain + 1);
                                        break;
                                    }

                                    document.getElementById(downstep).style.visibility = 'visible';
                                    setRandomnumber(randomnumber + 17);
                                    
                                document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                                break;}
                                else if (document.getElementById(rightstep).parentNode.style.backgroundColor === '') {
                                    if (rightstep > 204) {
                                        setOuch(pain = pain + 1);
                                        break;
                                    }

                                    document.getElementById(rightstep).style.visibility = 'visible';
                                    setRandomnumber(randomnumber + 1);
                                    
                                document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                                break;}
                                else {
                                    setGameover(true)
                                    break;
                                }
    
    
                            }
                        else if (document.getElementById((randomnumber+0.1) -1).parentNode.style.backgroundColor === '') {
                      document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                document.getElementById((randomnumber -1)+0.1).style.visibility = 'visible';
                setRandomnumber(randomnumber - 1);
                 break;
                                }
                                else {

                                    break;
                                }
                            
                            
                        
            case 'right':
                if (rightstep > 204) {
                    setOuch(pain = pain + 1);
                    break;
                }
                if(document.getElementById(rightstep) === null)
                    {setOuch(pain = pain + 1)

                    break;}
    
                    if (document.getElementById((randomnumber+0.1) +1).parentNode.style.backgroundColor === 'black'|| document.getElementById((randomnumber+0.1)+1).parentNode === null || document.getElementById((randomnumber+0.1)+1) === undefined){
                        setOuch(pain = pain + 1)

                        if (document.getElementById(upstep) === null) {
                            setOuch(pain = pain + 1);
                            break;}
                        if (document.getElementById(upstep).parentNode.style.backgroundColor === '') {
                            
                        document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                            document.getElementById(upstep).style.visibility = 'visible';
                            setRandomnumber(randomnumber - 17);
                        break;}
                        else if (document.getElementById(leftstep).parentNode.style.backgroundColor === '') {
                            
                        document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                            document.getElementById(leftstep).style.visibility = 'visible';
                            setRandomnumber(randomnumber - 1);
                        break;}
                        else if (document.getElementById(downstep).parentNode.style.backgroundColor === '') {
                            
                        document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                            document.getElementById(downstep).style.visibility = 'visible';
                            setRandomnumber(randomnumber + 17);
                        break;}
                        else {
                            setGameover(true)
                            break;
                        }
    
                
                        } else if (document.getElementById((randomnumber+0.1) + 1).parentNode.style.backgroundColor === '') {
                        document.getElementById(randomnumber+0.1).style.visibility = 'hidden';
                document.getElementById((randomnumber +1)+0.1).style.visibility = 'visible';
                setRandomnumber(randomnumber + 1);
                break;
                                        }
                                        else {

                                            break;
                                        }
                                    
    
             default:
                    break;
            
        }
    }
    }
        printBoxes();      
    }, [click])
        
    

  return (
    <>
    {game ? <Wrapper> 
        {gameover ? <h1>Did you catch it?</h1> : <div><h3>Try and box in the mouse.</h3> <Giantbox>{boxes}</Giantbox></div>}
    
    
    </Wrapper> : <Wrapper><h1>Screen is too small</h1></Wrapper>}
    </>
  )
}

export default Game