import React from 'react';
import Layout from '../layout'; 
import styles from './setting.module.scss';

const SettingPage = () => {
  return (
    <Layout contentClassName={styles.settingContent}>
      <div>
        Hello Setting!

      </div>
    </Layout>
  );
};

export default SettingPage;
