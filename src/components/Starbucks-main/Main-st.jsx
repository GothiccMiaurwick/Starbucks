import React from "react";
import "./Main.css";

const StarbucksMain = ({textoH, textoS, btn, img, colorSelected, des}) => {
  return (
    <div className="block">
      <div className="my-14">
        <div className="box-border">
          <div className="main-panel">
            <div className="block w-full">
              <img src={img} alt={des} />
            </div>
            <div
              className="main-panel-2-extra main-panel-2 "
              style={{backgroundColor: colorSelected}}
            >
              <div className="main-panel-text">
                <h1 className="main-panel-text-h1">
                  <span>{textoH}</span>
                </h1>
                <div className="main-panel-text-div">{textoS}</div>
                <span className="main-panel-text-button-container">
                  <a className="main-panel-text-button" href="">
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

export default StarbucksMain;
