import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import { Inter } from "next/font/google";
import "./application.scss";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children, contentClassName }) => {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
      </head>
      <body className={inter.className}>
        <div className="flex-container">
          <Sidebar />
          <div className="content-container">
            <Topbar />
            <main className={contentClassName}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
