import React from 'react';
import Layout from '../layout'; 
import styles from './stock.module.scss';


const Stocks = () => {
  return (
    <Layout contentClassName={styles.stockContent}>
      <div>
        Hello Stock!

      </div>
    </Layout>
  );
};

export default Stocks;
