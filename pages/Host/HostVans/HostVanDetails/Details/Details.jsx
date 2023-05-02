import React from 'react';
import { useOutletContext } from "react-router-dom";
import styles from './Details.module.css';

const Details = () => {
  const [van] = useOutletContext();
  return (
    <section>
      <h4>Name: <span>{van.name}</span></h4>
      <h4>Category: <span>{van.type}</span></h4>
      <h4>Description: <span>{van.description}</span></h4>
      <h4>Visibility: <span>Public</span></h4>
    </section>
  );
};

export default Details;
