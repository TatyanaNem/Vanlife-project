import React from 'react';
import {useOutletContext} from "react-router-dom";

const Pricing = () => {
  const [van] = useOutletContext();
  return (
    <h4>
      ${van.price}<span>/day</span>
    </h4>
  );
};

export default Pricing;
