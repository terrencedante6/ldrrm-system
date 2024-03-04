import React from 'react';
import Layout from '../layout'; 
import styles from './account.module.scss';

const AccountPage = () => {
  return (
    <Layout contentClassName={styles.accountContent}>
      <div>
        Hello Account!

      </div>
    </Layout>
  );
};

export default AccountPage;
