import React from 'react';
import heroImage from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__image-container">
        <img 
        src={heroImage} 
        alt="animated woman working on computer" className="hero__image" 
        />
      </div>
      <div className="hero__message">
        <h1 className="hero__heading">More than just shorter links</h1>
        <p className="hero__text">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className="hero__button btn">Get Started</button>
      </div>
    </div>
  )
}

export default Hero
