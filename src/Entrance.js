import "./Entrance.scss";
import LeafImg1 from "./assets/leaf_1.svg";
import LeafImg2 from "./assets/leaf_2.svg";
import LeafImg3 from "./assets/leaf_3.svg";
import LeafCard from "./assets/AllTeaLeafCard.png";
import React, { useEffect, useState } from "react";

// onButtonClick - index.js
function Entrance({ onButtonClick }) {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    if (showApp) {
      onButtonClick();
      setShowApp(false);
    }
  }, [showApp, onButtonClick]);

  return (
    <div className="entrance">
      <div className="main_containter">
        {/* ------ LEFT AREA ------ */}
        <div className="left_area">
          {/* -- TITLE -- */}
          <div className="title_box">
            <h4>Tea Leaf Fortune Cards</h4>
            <h1>
              Hi, this is an app for quickly searching the meanings of cards
            </h1>
          </div>
          {/* -- GRAPHIC -- */}
          <div className="graphic_box">
            <div className="bottom_text">
              <button onClick={onButtonClick}>START</button>
              <div>
                <p>AFTER</p>
                <p>CLICKING</p>
                <p>IT STARTS</p>
              </div>
            </div>

            <div className="graphicOutline_3">
              <div className="outline_box">
                <img src={LeafImg3} alt="img" className="img_3" />
                <div>
                  <p>12 Month</p>
                  <p>Cards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------ RIGHT AREA ------ */}
        <div className="right_area">
          {/* --- AREA 01 --- */}
          <div className="area_1">
            <div className="graphicOutline_img">
              <img src={LeafCard} alt="LeafCard" />
            </div>
          </div>
          {/* --- AREA 02 --- */}
          <div className="area_2">
            <div className="graphicOutline_1">
              <img src={LeafImg1} alt="img" className="img_1" />
              <p>182</p>
              <p>Symbol</p>
              <p>Cards</p>
            </div>
            <div className="graphicOutline_2">
              <img src={LeafImg2} alt="img" className="img_2" />
              <div>
                <p>6 Astral</p>
                <p>House</p>
                <p>Cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entrance;
