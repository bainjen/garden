import React, { useState } from "react";

//instead of passing 'props' this destructures to show what the props actually are inside of the object
const PlantList = () => {
  let [plants, setPlants] = useState(["🌴", "🌱", "🌵"]); //sets an initial array of plants

  //can help us to see when react is rerendering the page due to a change
  console.log("rerender happend!");

  const removePlant = (index) => {
    const newPlants = [...plants]; //copies the plants list so we don't mutate original
    setPlants(newPlants); //update state of plants
  };

  return (
    <div style={{ display: "flex" }}>
      {plants.map((plant, index) => (
        <p
          onclick={() => {
            removePlant(index);
          }}
        >
          {plant}
        </p>
      ))}
    </div>
  );
};
//onclick the index from the clicked plant is passed to removePlant function for deletion which resets state 

export default PlantList;
