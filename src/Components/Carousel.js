import { useState } from "react";
import styled from "styled-components";
import Project1 from "../Media/Project1.png";
import Projectbackend from "../Media/Projectbackend.png";
import Calculator from "../Media/Calculator.png";
import oldportfolio from "../Media/Oldportfolio.png";
import Reactproject from "../Media/Reactproject.png";
import github from "../Media/github.png";
import instapups from "../Media/Instapups.png";
import next from "../Media/next.png";
import prev from "../Media/prev.png";
import internet from "../Media/internet.png";

const Band = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: #84321f;
    color: #F0F8FF;
    margin-top: 100px;
    `;

const Border = styled.div`
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    color: #F0F8FF;
    `;

const Carouseldiv = styled.div`
text-align: center;
  display: block;
  width: 80%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #13131a ;
  color: White;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  width: 90%;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${(props) => props.left}%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 1s ease-in-out;
  .image {
    width: 100%;
    height: 70%;
  }
`;

const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    background: transparent;
    color: #F0F8FF;
    transition: all 0.5s ease-in-out;
`;


const Button1 = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background: transparent;
  color: #f0f8ff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
`;

const Button2 = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background: transparent;
  color: #f0f8ff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ThumbsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 80%;
`;

const Thumb = styled.img`
  width: 15%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const images = [  Project1,  Projectbackend,  Calculator,  oldportfolio,  Reactproject, instapups];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <>
    <Band> <h2>Projects I have done: </h2> </Band>
    <Border>
        
    <Carouseldiv>
      <Button1 onClick={prevSlide}><img src={prev} width="20px"></img></Button1>
      {images.map((image, index) => {
        const active = index === currentIndex;
        const lastSlide = index === currentIndex - 1;
        const nextSlide = index === currentIndex + 1;
        const left = (index - currentIndex) * 100;
        return (
          <Card key={index} active={active} left={left} lastSlide = {lastSlide} nextSlide= {nextSlide}>
            {active && (
              <img src={image} alt="project done" className="image" />
            )}
            {currentIndex === 0 && (<CardBottom><p>My first website project at school.</p><a href="https://github.com/Darkshiira/Examinationsuppgift---Frontend2---HTML-CSS"><img height= "30px" width="30px"alt="link to my github"src={github}></img></a></CardBottom>  )} 
            {currentIndex === 1 && (<CardBottom><p>We hade a server, hooked it up to MySQL(I used knex and objections) and created a website for todo-lists </p><a href="https://github.com/Darkshiira/Backend---individuell-uppgift"><img height= "30px" width="30px"alt="link to my github"src={github}></img></a> </CardBottom> )}
            {currentIndex === 2 && (<CardBottom><p>Just spending some time coding some useful apps.</p><div><a href="https://github.com/Darkshiira/Calculator"><img height= "30px" width="30px"alt="link to my github"src={github}></img></a>  <a href="https://darkshiira.github.io/Calculator/"><img width="30px" src={internet}></img></a></div></CardBottom> )}     
            {currentIndex === 3 && (<CardBottom><p>Done with jQuery and SCSS</p><div><a href="https://github.com/Darkshiira/Portfolio"><img height= "30px" width="30px"alt="link to my github"src={github}></img></a>  <a href="https://darkshiira.github.io/Portfolio/"><img width="30px" src={internet}></img></a></div> </CardBottom> )}
            {currentIndex === 4 && (<CardBottom><p>Learned how to useParams and useEffect, useState...</p><a href="https://github.com/Darkshiira/examinationsuppgift-react"><img height= "30px" width="30px"alt="link to my github"src={github}></img></a></CardBottom> )}
            {currentIndex === 5 && (<CardBottom><p>Grouproject, where we used MongoDB as Database, express-server and react</p><div><a href="https://github.com/BeccaFi/InstaPups---Backend"><img height= "30px" width="30px"alt="link to my github"src={github}></img></a><a href="https://github.com/BeccaFi/InstaPups---Frontend"><img height= "30px" width="30px"alt="link to my github"src={github}></img></a></div></CardBottom> )}
          </Card>
        );
      })}
      <Button2 onClick={nextSlide}><img src={next} width="20px"></img></Button2>
    </Carouseldiv>
    <ThumbsContainer>{images.map ((image, index) => {
            return <Thumb key={index} src={image} alt="project done" onClick={() => setCurrentIndex(index)} />
        } )}</ThumbsContainer>
    </Border>
    </>
  );
};

export default Carousel;
