import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slider from "../../components/Slider/Slider";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";

const Home = () => {
  return (
    <div>
      <Featured />
      <Slider>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
