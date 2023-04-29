import React from 'react';
import {Link} from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="vans">Find your van</Link>
      </div>
    </div>
)
  ;
};

export default Home;
