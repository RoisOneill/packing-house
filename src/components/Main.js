import React from 'react';
import Cow from './Cow.js';
import Pig from './Pig.js';
import Egg from './Egg.js';
import '../stylesheets/main.scss';

export default function Main() {
  return (
    <div>
      <h3 className="main--section">
        We believe in responsible agriculture, thus our farmers adhere to our strict protocols of production. We evaluate everything from animals welfare to environmental footprint. Currently our farmers are located in St. George and Dutton, Ontario, however we are always looking for farmers who align with our philosophy. We age all of our beef in-house, and custom break and bone whole animals. 
      </h3>
      <Cow />
      <Pig />
      <Egg />
    </div>
  )
}
