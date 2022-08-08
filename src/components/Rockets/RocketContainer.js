import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

export default function RocketContainer() {
  const { rockets, pending } = useSelector((state) => state.rockets);
  return (
    <>
      {pending ? (
        <h3>pending</h3>
      ) : (
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            img={rocket.flickr_images}
            reserved={rocket.reserved}
          />
        ))
      )}
    </>
  );
}
