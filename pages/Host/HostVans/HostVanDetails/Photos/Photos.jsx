import React from 'react';
import {useOutletContext} from "react-router-dom";

const Photos = () => {
  const [van] = useOutletContext();
  return (
    <div>
      <img
        src={van.imageUrl}
        alt={van.name}
        width={100}
        height={100}
        style={{borderRadius: '5px'}}
      />
    </div>
  );
};

export default Photos;
