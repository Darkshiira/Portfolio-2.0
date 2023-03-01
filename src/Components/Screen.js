import React from 'react'
import styled from 'styled-components'
import videoimg from '../Media/video.png'
import calculatorimg from '../Media/calculatorpic.png'
import windowimg from '../Media/window.png'
import envelopeimg from '../Media/envelope.png'
import folderimg from '../Media/folder.png'
import oldportfolio from '../Media/Oldportfolio.png'
import Reactpro from '../Media/Reactproject.png'
import { useState, useEffect } from 'react';
import Animation from './Animation'
import Calculator from './Calculator'
import Memory from './Memory'
import memorycards from '../Media/photos.png'
import projec2 from '../Media/Project2.png'

const ScreenWrapper = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 95%;
    background: linear-gradient(32deg, rgba(60,58,180,1) 0%, rgba(29,199,253,1) 50%, rgba(69,252,247,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        padding: 10px;
    }`

    const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    background-color: lightblue;
    `
    const Windowbar = styled.div`
    position: relative;
    top: -120px;
    width: 100px;
    height: 150px;
    display: flex;
    flex-direction: column;
    `
    const Folder = styled.div`
    width: 100px;
    height: 30px;
    background-color: lightgrey;
    cursor: pointer;
    `

    const Documents = styled.div`
    position: absolute;
    top: 30px;
    left: 100px;
    height: 50%;
    background-color: lightgrey;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: start;

    @media (max-width: 768px) {
        top: 0;
        left: 0;
        width: 100%;
    
    `

    const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`

    const Folderbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    background-color: lightblue;
    `
    const FolderContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 90%;
    background-color: lightgrey;
    `

const Screen = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [menu, setMenu] = useState(false);
    const [folder, setFolder] = useState(false);
    const [screen, setScreen] = useState(false);
    const [calculator, setCalculator] = useState(false);
    const [memory, setMemory] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const openScreen = (e) => {
        e.preventDefault();
        setScreen(true)
        setInterval(() => {
        setScreen(false);
        }
        , (1000*30));
        
    }

    const openMenu = (e) => {
        e.preventDefault();
        if (menu) {
            setMenu(false);
        } else {
        setMenu(true);
        }
    }

    const openFolder = (e) => {
        e.preventDefault();
        if (folder) {
            setFolder(false);
        } else {
        setFolder(true);
        }
    }

    const openCalculator = (e) => {
        e.preventDefault();
        if (calculator) {
            setCalculator(false);
        } else {
        setCalculator(true);
        }
    }

    const openMemory = (e) => {
        e.preventDefault();
        if (memory) {
            setMemory(false);
        } else {
        setMemory(true);
        }
    }


  return (
    <>
    {screen ? <Animation /> :
    <ScreenWrapper>  
    <Wrapper>
        <img onClick={(e)=> openScreen(e)} alt = "Animation"src= {videoimg} width="30px" height="30px"></img>
        <a href="mailto:darkshiira@hotmail.com"><img alt="email" width="30px" height="30px" src= {envelopeimg}></img></a>
        <img onClick={(e) => openFolder(e)} alt="my documents" width="30px" height="30px" src={folderimg}></img>
        <img onClick= {(e) => openCalculator(e)} alt="calculator" width="30px" height="30px" src= {calculatorimg}></img>
        <img onClick= {(e) => openMemory(e)} alt="memory" width="30px" height="30px" src= {memorycards}></img>
        {folder ? <Documents>
        <Folderbar><span>Downloads</span><button onClick={(e)=> openFolder(e)}>X</button></Folderbar>
        <FolderContainer>  
            <Card>
            <a href={oldportfolio} download="Oldportfolio.png"><img alt="old portfolio" width="120px" height="60px" src={oldportfolio}></img></a>
            <span>Old Portfolio.png</span>
            </Card>
            <Card>
            <a href={Reactpro} download="Reactproject.png"><img alt="Project I did for React" width="120px" height="60px" src={Reactpro}></img></a>
            <span>Reactproject.png</span>
            </Card>
            <Card>
            <a href={projec2} download="Project2.png"><img alt="Lookalike instagram" width="120px" height="60px" src={projec2}></img></a>
            <span>Project2.png</span>
            </Card>

        </FolderContainer></Documents>  :null}
        {calculator ? <Calculator/> : null}
        {memory ? <Memory /> : null}


        
    
    </Wrapper>
    
    <Bar>
     {menu? <Windowbar>
        <Folder><span onClick={(e) => openScreen(e)}>Animation</span></Folder>
        <Folder><span onClick={(e) => openFolder(e)}>Documents</span></Folder>
        <Folder><span onClick={(e) => openCalculator(e)}>Calculator</span></Folder>
        <Folder><span onClick={(e) => openMemory(e)}>Memory</span></Folder>
     <img onClick = {(e) => openMenu(e)} alt="a window" src= {windowimg} width="30px" height="30px"></img></Windowbar> 
     : <img onClick = {(e) => openMenu(e)} alt="a window" src= {windowimg} width="30px" height="30px"></img>}
        <div>{time}</div>
    </Bar>
    </ScreenWrapper>
    }
    
    </>
  )
}

export default Screen