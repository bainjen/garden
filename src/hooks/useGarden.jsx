import React, { useState } from "react";

const seedLookup = {
  "⌾": "🌱",
  ".": "🌿",
  o: "🌷",
  0: "🍀",
  "@": "🌵",
  "*": "🌴",
  c: "🌻",
  "#": "🍄",
  q: "🌾",
  v: "🌲",
};

//pure functions should stay outside of components and hooks
//@TODO create helper file

//generate random seed selection
const randomSeeds = (number) => {
  let seeds = {};
  let keys = Object.keys(seedLookup);
  for(let i = 0; i < number; i++){
    let rand = Math.floor(Math.random() * 6);
    seeds[keys[rand]] = seedLookup[keys[rand]];
  }
  return seeds;
}


//custom hook to use garden

const useGarden = (numberSeeds) => {
  //allows us to work with seeds object above. Uses randomSeeds function to generate a random selection of seeds as the default value of the seed state.
  const [seeds, setSeeds] = useState(randomSeeds(numberSeeds || 5));
  //
  const [garden, setGarden] = useState([]); //[plant: , size: }]

  const water = (index) => {
    //water a specific plant (which will make it grow by one size increment)
    const newGarden = garden.map((plot, currentIndex) => {
      if (currentIndex === index) {
        return { ...plot, size: plot.size + 1 };
      } else {
        return plot;
      }
    });
    setGarden(newGarden);
  };

  const plant = (seed) => {
    //make copy of seeds
    //remove the seed from seeds
    const newSeeds = { ...seeds };
    delete newSeeds[seed];
    // const {[seed]: remove, ...newSeeds} = seeds;
    //update the state of seeds so it no longer includes selected seed
    setSeeds(newSeeds);
    //update garden by adding new seed to the garden that was removed from seeds (shifting position)
    setGarden([...garden, { plant: seeds[seed], size: 1 }]);
  };

  return {
    seeds,
    garden,
    plant,
    water,
  };
};

export default useGarden; 

// import React, {useState} from 'react';

// const seedLookup = {
//   "⌾": "🌱",
//   ".": "🌿",
//   o: "🌷",
//   "0": "🍀",
//   "@": "🌵",
//   "*": "🌴"
// };

// // lift pure functions outside of component/hooks
// const randomSeeds = (number) => {
//   let seeds = {};
//   let keys = Object.keys(seedLookup);
//   for(let i = 0; i < number; i++){
//     let rand = Math.floor(Math.random() * 6);
//     seeds[keys[rand]] = seedLookup[keys[rand]];
//   }
//   return seeds;
// }

// const useGarden = (numberSeeds) => {
//   const [seeds, setSeeds] = useState(randomSeeds(numberSeeds || 5));
//   const [garden, setGarden] = useState([]); //[{plant: , size: }]

//   const water = (index) => {
//     //water a specific plant
//     const newGarden = garden.map((plot, currentIndex) => {//[{plant: , size: }]
//       if (currentIndex === index) { //{plant: 🌳, size: 1}
//         return {...plot, size: plot.size + 1};
//       } else {
//         return plot;
//       }
//     });
//     setGarden(newGarden);
//   };

//   const plant = (seed) => {
//     // remove the seed from seeds
//     const newSeeds = {...seeds};
//     delete newSeeds[seed];
//     // const {[seed]: remove, ...newSeeds} = seeds;
//     setSeeds(newSeeds);
//     //add the new plant to garden
//     setGarden([...garden, {plant: seeds[seed], size: 1}]);
//   }

//   return {
//     seeds,
//     garden,
//     plant, 
//     water
//   }
// };

// export default useGarden;