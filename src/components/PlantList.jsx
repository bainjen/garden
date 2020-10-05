import React, { useState } from "react";
import Plant from "./Plant";

//instead of passing 'props' this destructures to show what the props actually are inside of the object
const PlantList = ({ plants, growPlant }) => {
  // let [plants, setPlants] = useState(["🌴", "🌱", "🌵"]); //sets an initial array of plants

  //can help us to see when react is rerendering the page due to a change
  console.log("rerender happend!");

  // const removePlant = (index) => {
  //   const newPlants = [...plants]; //copies the plants list so we don't mutate original
  //   setPlants(newPlants); //update state of plants
  // };
  const eachPlant = plants.map((plant, index) => {
    return (
      <Plant
        key={index}
        plant={plant.plant}
        size={plant.size}
        growPlant={growPlant}
        plantIndex={index}
      />
    );
  });

  return (
    <div style={{ display: "flex" }}>
      <h2>Garden</h2>
      {eachPlant}
      {/* {plants.map((plant, index) => (
        <p
          onclick={() => {
            removePlant(index);
          }}
        >
          {plant}
        </p>
      ))} */}
    </div>
  );
};
//onclick the index from the clicked plant is passed to removePlant function for deletion which resets state

export default PlantList;
