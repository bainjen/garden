import React from "react";

const Seed = (props) => {
  return <p onClick={() => props.plantSeed(props.seed)}>{props.seed}</p>;
};
export default Seed;
