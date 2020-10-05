import React, { useState } from 'react'; 
import useGarden from '../hooks/useGarden'; 

const Garden = () => {
//destructure props
  const { seeds, garden, plant, water } = useGarden(); 
  console.log(seeds); 
  return (
    <div>
      <h2>seeds collection</h2>
      <div style={{ display: 'flex' }}>
        <div>{}</div>  
      </div>
    </div>
  )
}

export default Garden; 