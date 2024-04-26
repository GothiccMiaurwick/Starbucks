import React from "react";
import "./Starbucks-main.css";

const StarbucksMain3 = ({ textoH, textoS, btn, img, colorSelected, sizeText, sizeTitle, des}) => {
  
  return (
    <div className="main-container">
      <div className="main-panel-container">
        <div className="main-panel-pre">
          <div className="main-panel">
            <div className="main-panel-1-2">
              <img src={img} alt={des} />
            </div>
            <div
              className="main-panel-2"
              style={{ backgroundColor: colorSelected}}
            >
              <div className="main-panel-text">
                <h1 className="main-panel-text-h1">
                  <span style={{fontSize: sizeTitle, color: "#272320",letterSpacing: "-0.01em"}}>{textoH}</span>
                </h1>
                <div className="main-panel-text-div" style={{fontSize: sizeText, lineHeight: "1.75", letterSpacing: "-0.01em"}}>{textoS}</div>
                <span className="main-panel-text-button-container">
                  <a className="main-panel-text-button" style={{color: "white", backgroundColor: "#1e3932"}} href="">
                    {btn}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarbucksMain3;