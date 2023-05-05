import React from 'react';
import styles from './Error.module.css';
import {useRouteError} from "react-router-dom";

const Error = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div className={styles.errorBlock}>
      <h1>
        Error: {error.message}
        <pre>{error.status} - {error.statusText}</pre>
      </h1>
    </div>
  );
};

export default Error;
