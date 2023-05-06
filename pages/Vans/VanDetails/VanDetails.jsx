import React, {useEffect, useState} from 'react';
import {useLoaderData, useLocation, useParams} from "react-router-dom";
import styles from './VanDetails.module.css';
import BackLink from "../../../components/BackLink/BackLink";
import TypeButton from "../../../components/TypeButton/TypeButton";
import {getVans} from "../../../common/API/api";
import {requireAuth} from "../../../common/utils/requireAuth";

export const loader = async ({params}) => {
  await requireAuth()
  return getVans(params.id)
}

const VanDetails = () => {
  const van = useLoaderData()
  const location = useLocation()
  const settings = location.state?.search || ""

  return (
    <div className={styles.container}>
      <BackLink settings={settings} type={van?.type || 'all'}/>
        <div className={styles.vanDetail}>
          <img src={van.imageUrl} alt={van.name}/>
          <TypeButton typeName={van.type}/>
          <h2>{van.name}</h2>
          <p className={styles.vanPrice}><span>${van.price}</span>/day</p>
          <p>{van.description}</p>
          <button className={styles.linkButton}>Rent this van</button>
        </div>
    </div>
  );
};

export default VanDetails;
