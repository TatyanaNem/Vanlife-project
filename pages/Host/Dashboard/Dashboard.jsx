import React from 'react';
import {requireAuth} from "../../../common/utils/requireAuth";
import {Await, defer, Link, useLoaderData} from "react-router-dom";
import {getHostVans} from "../../../common/API/api";
import {BsStarFill} from "react-icons/bs";
import styles from './Dashboard.module.css';
import Loading from "../../../components/Loading/Loading";

export async function loader({request}) {
  await requireAuth(request)
  return defer({vans: getHostVans()})
}

const Dashboard = () => {
  const loaderData = useLoaderData()
  console.log(loaderData)

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <li key={van.id} className={styles.itemWrapper}>
        <div className={styles.item}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`}/>
          <div className={styles.description}>
            <p className={styles.name}>{van.name}</p>
            <p className={styles.price}>${van.price}/day</p>
          </div>
        </div>
        <Link to={`/host/vans/${van.id}`}>View</Link>
      </li>
    ))

    return (
      <ul className={styles.list}>
        {hostVansEls}
      </ul>
    )
  }

  return (
    <>
      <section className={styles.hostDashboardEarnings}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1>Welcome!</h1>
            <p>Income last <span>30 days</span></p>
            <h2>$2,260</h2>
          </div>
          <Link to="/host/income">Details</Link>
        </div>
      </section>
      <section className={styles.hostDashboardReviews}>
        <div className={styles.container}>
          <h2>Review score</h2>
          <BsStarFill className={styles.star}/>
          <p>
            <span>5.0</span>/5
          </p>
          <Link to="/host/reviews">Details</Link>
        </div>
      </section>
      <section className={styles.hostDashboardVans}>
        <div className={styles.top}>
          <h2>Your listed vans</h2>
          <Link to="/host/vans">View all</Link>
        </div>
        <React.Suspense fallback={<Loading text='vans. Please wait ⌛'/>}>
          <Await resolve={loaderData.vans}>{renderVanElements}</Await>
        </React.Suspense>
      </section>
    </>
  )
};

export default Dashboard;
