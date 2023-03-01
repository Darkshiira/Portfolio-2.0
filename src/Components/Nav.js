import React from 'react'
import styled from 'styled-components'
import linkedinimg from '../Media/linkedin.png'
import githubimg from '../Media/github.png'

const Wrapper = styled.div`
background-color: #13131a ;
height: 50px;
display: flex;
justify-content: space-between;
width: 100%;

@media (max-width: 1400px) {
    height: 100px;
}

@media (max-width: 768px) {
    flex-direction: column;
    height: 150px;
    justify-content: center;
    align-items: center;
}
`
const Title = styled.div`

    dislay: flex;
    flex-direction: column;
    color: white;
    margin: 0;
    padding: 10px 30px;

`
const Images = styled.div`
padding-top: 30px;
padding-right: 30px;

img {
    margin-left: 20px;
}
img:hover {
    cursor: pointer;
}
`

const Nav = () => {
  return (
    <Wrapper>
        <Title><h2>Hanna Arefiardakani</h2>
        <h3>Fullstackutvecklare</h3></Title>
        
        <Images>
            <a href="https://www.linkedin.com/in/hanna-arefi-ardakani-b763ba200/">
                <img alt= "Link to my LinkedIn page"src= {linkedinimg} width="40px" height="40px">
                    </img></a> 
                    <a href="https://github.com/Darkshiira">
                        <img alt = "Link to my github page"src= {githubimg} width="40px" height="40px">
                            </img></a></Images>
    </Wrapper>
  )
}

export default Nav