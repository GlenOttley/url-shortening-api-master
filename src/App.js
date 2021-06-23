import React from "react";
import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Statistics from "./components/Statistics";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {

  const breakPoints = {
    mobile: useMediaQuery("(max-width: 767px)"),
    tablet: useMediaQuery("(min-width: 768px) and (max-width: 1199px)"),
    desktop: useMediaQuery("(min-width: 1200px)")
  }

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true); 
  }

  return (
    <div className="App">
      <Nav 
      breakPoints={breakPoints}
      toggleMenu={toggleMenu}
      showMenu={showMenu}
      />

      {showMenu && breakPoints.mobile ?
      <MobileMenu
      toggleMenu={toggleMenu} 
      setShowMenu={setShowMenu}
      />
      : null
      }

      <Hero />

      <div className="bg-gray">
        <div className="offset">
          <Form />
          <Statistics />
          
        </div>
        <CTA/>
        <Footer />
      </div>

    </div>
  );
}

export default App;
