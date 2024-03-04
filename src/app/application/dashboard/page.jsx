import React from 'react';
import Layout from '../layout';
import styles from './dashboard.module.scss';

const DashboardPage = () => {
  return (
    <Layout contentClassName={styles.dashboardContent}>
      <div>
        Hello Dashboard!
Some thing sa display flex sa layout mu double ang containers and naay white gap under
      </div>
    </Layout>
  );
};

export default DashboardPage;
