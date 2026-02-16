
import Body from "../../components/Body";
import Hero from "../../components/Hero";
import Flex1 from "../../components/FlexComp/Flex";
import Flex2 from "../../components/FlexComp/Flexbox1";
import Flex3 from "../../components/FlexComp/Flex3";
import Social from "../../components/Social/Social";
import Carousel1 from "../../components/Carousel";
import CardSlider from "../../components/cardSlider";
 import Navbar1 from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";


const Home = () => {
 
  return (
    <>
      
      <Navbar1  />
      <Carousel1 />
      <Body />
      <CardSlider />
      <Hero />
      <Flex1 />
      <Flex2 />
      <Flex3 />
      <Social />
      <Footer/>
    </>
  );
};

export default Home;