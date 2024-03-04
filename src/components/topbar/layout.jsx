import React from 'react';
import Topbar from './topbar'; 
import styles from './topbar.module.scss';

const TopbarLayout = ({ children }) => {
  return (
    <div className={styles.TopbarLayout}>
      <Topbar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default TopbarLayout;
