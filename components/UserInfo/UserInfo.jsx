import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = () => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  return (
    <div className={styles.userInfo}>
      <img
        src={userData.avatar ? userData.avatar : defaultAvatar}
        alt={userData.name}
        className={styles.avatar}
      />
    </div>
  );
};

export default UserInfo;
