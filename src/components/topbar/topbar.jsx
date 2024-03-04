import React from 'react';
import Link from 'next/link';
import styles from './topbar.module.scss';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.nav}>
        <Link href="#" className={styles.navItem}>
        <span>Item 1</span>
        </Link>
        <Link href="#" className={styles.navItem}>
        <span>Item 2</span>
        </Link>
        <Link href="#" className={styles.navItem}>
            <span>Item 3whooo</span>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
