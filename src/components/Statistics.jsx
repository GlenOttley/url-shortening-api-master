import React from 'react';
import recognitionIcon from "../images/icon-brand-recognition.svg";
import recordsIcon from "../images/icon-detailed-records.svg";
import customizableIcon from "../images/icon-fully-customizable.svg";


export default function Statistics() {
  return (
    <div className="statistics container">
      <div className="statistics__hero">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are perfoming across the web with our advanced statistics dashboard.
        </p>
      </div>

      <div className="statistics__card-container">
      <div className="statistics__card">
          <div className="statistics__round">
            <img
            className="statistics__icon"
            src={recognitionIcon} 
            alt="graph" 
            />
          </div>
            
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <hr className="statistics__divider"></hr>

        <div className="statistics__card">
          <div className="statistics__round">
            <img
            className="statistics__icon"
            src={recordsIcon} 
            alt="speedometer" 
            />
          </div>
            
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>

        <hr className="statistics__divider"></hr>

        <div className="statistics__card">
          <div className="statistics__round">
            <img
            className="statistics__icon"
            src={customizableIcon} 
            alt="pens and paintbrushes" 
            />
          </div>
            
          <h3>Fully Customizable</h3>
          <p>
          Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
        
    </div>
  )
}
