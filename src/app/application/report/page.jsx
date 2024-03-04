import React from 'react';
import Layout from '../layout'; 
import styles from './report.module.scss';

const ReportPage = () => {
  return (
    <Layout contentClassName={styles.reportContent}>
      <div>
        Hello Report!

      </div>
    </Layout>
  );
};

export default ReportPage;
