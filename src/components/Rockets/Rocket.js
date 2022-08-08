/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import '../styles/rocket.css';
import RocketBtn from './rocketBtn';

const Rocket = ({
  id, name, description, img, reserved,
}) => (
  <div id={`rocket${id}`} className="rocket">
    <img id="rocket-img" src={img} alt="rocket cover" />
    <div className="rocket-info">
      <h3 className="rocket-title">{name}</h3>
      <p className="rocket-description">{description}</p>
      <RocketBtn id={id} reserved={reserved} />
    </div>
  </div>
);

export default Rocket;
