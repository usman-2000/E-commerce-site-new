import React from "react";
import "../styles/card.css";
const Mycard = (props) => {
  return (
    <div className="mycard">
      <img src={props.img} alt="" />
    </div>
  );
};

export default Mycard;
