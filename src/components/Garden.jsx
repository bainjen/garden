import React, { useState } from "react";
import useGarden from "../hooks/useGarden";
import SeedList from "./SeedList";
import PlantList from "./PlantList";

const Garden = () => {
  //destructure props
  const { seeds, garden, plant, water } = useGarden();
  console.log(seeds);
  const seedPacket = Object.keys(seeds);
  console.log(seedPacket);
  return (
    <div>
      <SeedList seeds={seedPacket} plantSeed={plant} />

      <PlantList plants={garden} growPlant={water} />
      {/* 
      <div style={{display: 'flex'}}>
        {garden.map((plot, index) => <p style={{fontSize: `${plot.size}em`}} onClick={() => water(index)}>{plot.plant}</p>)}
       </div> */}
    </div>
  );
};

export default Garden;

//Travis' code -- I am making additional components (seed, seedList)
// const Garden = () => {
//   const {seeds, garden, plant, water} = useGarden();
//   return (
//     <div>
//       <h2>Seeds</h2>
//       <div style={{display: 'flex'}}>
//         {Object.keys(seeds).map((key) => <p onClick={() => plant(key)}>{key}</p>)}
//       </div>
//       <h2>Garden</h2>
//       <div style={{display: 'flex'}}>
//         {garden.map((plot, index) => <p style={{fontSize: `${plot.size}em`}} onClick={() => water(index)}>{plot.plant}</p>)}
//       </div>
//     </div>
//   );
// };

// export default Garden;
