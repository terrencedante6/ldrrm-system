import React from 'react';
import Layout from '../layout'; 
import styles from './page.module.scss';

const AnnouncementPage = () => {
  return (
    <Layout contentClassName={styles.announcementContent}>
      <div>
        Hello Announcement!

      </div>
    </Layout>
  );
};

export default AnnouncementPage;
