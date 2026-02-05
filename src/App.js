import Navbar1 from "./components/Navbar";
import Carousel1 from "./components/Carousel";
import Body from "./components/Body";
// import Carousel2 from "./components/Carousel2";
import CardSlider from './components/cardSlider'
import Hero from "./components/Hero";
import Flex1 from "./components/FlexComp/Flex";
import Flex2 from "./components/FlexComp/Flexbox1";
import Flex3 from './components/FlexComp/Flex3'
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";
// import SignOut from "./components/SignOut/SignOut";


function App() {
  return (
    <>
      <Navbar1 />
      <Carousel1 />
      <Body />
      {/* <Carousel2/> */}
      <CardSlider/> 
      <Hero />
      <Flex1 />
      <Flex2 />
      <Flex3 />
      <Social />
      <Footer />
      {/* <SignOut/> */}

    </>
  );
}

export default App;
