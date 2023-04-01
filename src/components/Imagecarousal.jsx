import React from "react";
import Mycard from "./Card.jsx";
import "../styles/imagecarousal.css";
import prev from "../images/prev.png";
import next from "../images/next.png";
import Chair from "../images/chair.png";
import chair1 from "../images/chair1.png";
import chair2 from "../images/chair2.png";
import chair3 from "../images/chair3.png";
import chair4 from "../images/chair4.png";
import ProductCard from "./ProductCard.jsx";
import Button from "./Button.jsx";

const Imagecarousel = () => {
  // let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let box = document.querySelector(".product-container");

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let box = document.querySelector(".product-container");

    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      <h1>Popular Products</h1>
      <button className="pre-btn" onClick={btnpressprev}>
        <p>
          <img src={prev} alt="" />
        </p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>
          <img src={next} alt="" />
        </p>
      </button>
      <div className="product-container">
        <ProductCard
          image={Chair}
          heading="Minimal Armchair"
          para="Light grey minimal armchair featuring legs made from walnut."
          span="$125"
        />
        <ProductCard
          image={chair1}
          heading="Sleek Sofa Chair"
          para="Faded blue sleek sofa chair with legs made from oak."
          span="$125"
        />
        <ProductCard
          image={chair3}
          heading="Vintage Grey Chair"
          para="Grey vintage chair with wooden legs made out of oak."
          span="$125"
        />
        <ProductCard
          image={chair4}
          heading="Beige Dining Chair"
          para="A beige dining chair made entirely from white spruce."
          span="$125"
        />
        <ProductCard
          image={Chair}
          heading="Minimal Armchair"
          para="Light grey minimal armchair featuring legs made from walnut."
          span="$125"
        />
        <ProductCard
          image={chair1}
          heading="Sleek Sofa Chair"
          para="Faded blue sleek sofa chair with legs made from oak."
          span="$125"
        />
        <ProductCard
          image={chair3}
          heading="Vintage Grey Chair"
          para="Grey vintage chair with wooden legs made out of oak."
          span="$125"
        />
      </div>
      <div className="btn-cont-prod">
        <Button className="btn btn-explore" name="Explore all items" />
      </div>
    </div>
  );
};

export default Imagecarousel;
