import React from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import styles from './HostLayout.module.css';

const HostLayout = () => {
  const names = ['dashboard', 'income', 'vans', 'reviews']

  return (
    <div className={styles.container}>
      <Navigation names={names} />
      <Outlet />
    </div>
  );
};

export default HostLayout;
