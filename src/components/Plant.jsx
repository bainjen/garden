import React from "react";

//instead of passing 'props' this destructures to show what the props actually are inside of the object
const Plant = ({ size, plant, growPlant,  plantIndex }) => {
  // let [plantSize, setPlantSize] = useState(size);

  //increases plant size by one unit of mesaurement
  // const growPlant = () => {
  //   console.log("plantSize before", plantSize);
  //   setPlantSize(plantSize + 1);
  //   console.log("plantSize after", plantSize);
  // };

  //onClick is an attirbute to the plant emoji and when it is clicked the plant grows by one size and the font size is increased by 1 em. Could change unit of measurement, or even set to a different variable
  return (
    <div>
      <p onClick={() => growPlant(plantIndex)} style={{ fontSize: `${size}em` }}>
        {plant}
      </p>
    </div>
  );
};

export default Plant;
