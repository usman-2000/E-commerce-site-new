import React from "react";
import "../styles/ownCreation.css";
import living1 from "../images/living1.jpg";
import living2 from "../images/living2.jpg";
import living3 from "../images/living3.jpg";
import living4 from "../images/living4.jpg";

export default function OwnCreation() {
  return (
    <div className="own-creation-container">
      <div className="own-creation-content">
        <h2 className="own-creation-content-bold">
          Custom Creations by Wellington Furnishings
        </h2>
        <p className="own-creation-content-light">
          Designed and built in-house
        </p>
        {/* <div className="own-creation-btn">
          <p>more</p>
          <button>prev</button>
          <button>next</button>
        </div> */}
      </div>

      <div className="image-container">
        <div className="own-creation-img">
          <img src={living1} alt="living1" id="own-div-img" />
        </div>
        <div className="own-creation-img">
          <img src={living2} alt="living1" id="own-div-img" />
        </div>
        <div className="own-creation-img">
          <img src={living3} alt="living1" id="own-div-img" />
        </div>
        {/* <div className="own-creation-img">
        <img src={living4} alt="living1" id="own-div-img" />
      </div> */}
      </div>
    </div>
  );
}
