import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/topbar/topbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children, contentClassName }) => {
  return (
    <html lang="en">
      <head>
        <title>Dashboard ni bai</title>
        <style>{`
          body {
            margin: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .content-container {
            flex: 1;
            padding: 20px;
            margin-top: 70px;
            box-sizing: border-box; 
          }

          .flex-container {
            display: flex;
            flex-grow: 1; 
            background color 
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <Topbar />
        <div className="flex-container">
          <Sidebar />
          <div className="content-container">
            <main className={contentClassName}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
