import React, {useEffect, useState} from 'react';
import {Await, defer, useLoaderData, useLocation, useParams} from "react-router-dom";
import styles from './VanDetails.module.css';
import BackLink from "../../../components/BackLink/BackLink";
import TypeButton from "../../../components/TypeButton/TypeButton";
import {getVan} from "../../../common/API/api";
import {requireAuth} from "../../../common/utils/requireAuth";
import Loading from "../../../components/Loading/Loading";

export const loader = async ({params, request}) => {
  await requireAuth(request)
  return defer({van: getVan(params.id)})
}

const VanDetails = () => {
  const dataPromise = useLoaderData()
  const location = useLocation()
  const settings = location.state?.search || ""

  function renderVanDetails(van) {
    return (
      <>
        <BackLink settings={settings} type={van?.type || 'all'}/>
        <div className={styles.vanDetail}>
          <img src={van.imageUrl} alt={van.name}/>
          <TypeButton typeName={van.type}/>
          <h2>{van.name}</h2>
          <p className={styles.vanPrice}><span>${van.price}</span>/day</p>
          <p>{van.description}</p>
          <button className={styles.linkButton}>Rent this van</button>
        </div>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <React.Suspense fallback={<Loading text='van details. Please wait ⌛'/>}>
        <Await resolve={dataPromise.van}>
          {renderVanDetails}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default VanDetails;
