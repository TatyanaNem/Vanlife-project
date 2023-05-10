import React from 'react';
import styles from './Income.module.css';
import incomeGraph from '../../../common/assets/incomeGraph.png';

const Income = () => {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ]
  return (
    <section className={styles.hostIncome}>
      <h1>Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img
        className={styles.graph}
        src={incomeGraph}
        alt="Income graph"
      />
      <div className={styles.infoHeader}>
        <h3>Your transactions ({transactionsData.length})</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div>
        {transactionsData.map((item) => (
          <div key={item.id} className={styles.transaction}>
            <h3>${item.amount}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Income;
