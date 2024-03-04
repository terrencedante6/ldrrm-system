import React from 'react';
import Layout from './layout'; 
import DashboardPage from './dashboard/page';
import AnnouncementPage from './announcement/page';
import MobileRequestPage from './mobilerequest/page';
import StockPage from './stock/page';
import ReportPage from './report/page';
import AccountPage from './account/page';
import SettingPage from './setting/page';

const Page = () => {
  return (
    <Layout>

      <DashboardPage />

      <AnnouncementPage />
      <MobileRequestPage />
      <StockPage />
      <ReportPage />
      <AccountPage />
      <SettingPage />
    </Layout>
  );
};

export default Page;
