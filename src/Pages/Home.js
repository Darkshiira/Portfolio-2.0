import React from 'react'
import Headtitle from '../Components/Headtitle'
import Computer from '../Components/Computer'
import Portfolio from '../Components/Portfolio'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Computer />
    <Headtitle />
    <Contact/>
    <Portfolio />
    <Footer />
    </>
  )
}

export default Home