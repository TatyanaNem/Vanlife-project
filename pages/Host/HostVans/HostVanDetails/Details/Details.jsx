import React from 'react';
import styles from "../HostVanDetails.module.css";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const [van] = useOutletContext();
  return (
    <div>
      <p className={styles.name}>Name: <span>{van.name}</span></p>
      <p>Category: <span>{van.type}</span></p>
      <p>Description: <span>{van.description}</span></p>
      <p>Visibility: <span>Public</span></p>
    </div>
  );
};

export default Details;
