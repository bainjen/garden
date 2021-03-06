import React from "react";
import Seed from "./Seed";

const SeedList = (props) => {
  const seedList = props.seeds.map((seed, i) => {
    return <Seed key={i} plantSeed={props.plantSeed} seed={seed} />;
  });

  return (
    <div style={{ display: "flex" }}>
      <h2>seeds collection</h2>
      {seedList}
    </div>
  );
};
export default SeedList;
