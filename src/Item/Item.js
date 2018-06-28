import React from 'react';
import livingRoom from '../assets/images/living-room.jpg';

const item = () => {
  return (
    <div>
      <img
        src={livingRoom}
        alt="Living room" />
      <p>This is an item</p>
      <p>Another line</p>
    </div>
  );
};

export default item;