import React from "react";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.scss";

const Slider = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider">
      <div className="container">
        <Carousel responsive={responsive} infinite={true}>
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
