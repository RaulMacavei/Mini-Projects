import React from "react";
import Data from "../Data";
import Cards from "./Cards";

function Main() {
  const card = Data.map((card) => {
    return (
      <Cards
        coverImg={card.coverImg}
        locationImg={card.locationImg}
        location={card.location}
        title={card.title}
        info={card.info}
      />
    );
  });
  return <div className="main">{card}</div>;
}

export default Main;
