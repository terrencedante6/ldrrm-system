import React from 'react';
import Link from 'next/link';
import styles from './topbar.module.scss';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      
      <div className={styles.nav}>
        <Link href="#" className={styles.navItem}>
        <span>Tubol</span>
        </Link>
        <Link href="#" className={styles.navItem}>
        <span>Igit</span>
        </Link>
        <Link href="#" className={styles.navItem}>
            <span>Ihi Dugo</span>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
