import React from 'react'
import Navrbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Exports from '../Components/Exports';
import News from '../Components/News';
import Plans from "../Components/Plans";
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
    <Navrbar />
    <Hero />
    <Exports />
    <News />
    <Plans />
    <Contact />
    <Footer />
    </>
  )
}

export default Home