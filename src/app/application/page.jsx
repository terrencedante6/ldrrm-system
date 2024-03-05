import React from "react";
import "./application.scss"; 

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <h2>Most ani di ma use pang looks sa ni</h2>
      </div>

      <div className="dashboard-container">
        <h2>important notes(work reminder)</h2>
      </div>

      <div className="dashboard-container">
        <h2>Date: 25/02/2024<br/>Time: 3:00Am</h2>
      </div>

      <div className="dashboard-container">
        <h2>Activity logs</h2>
      </div>

      <div className="dashboard-container dashboard-container-large">
        <h2>Create Request</h2>
      </div>

      <div className="dashboard-container dashboard-container-small">
        <h2>Chatbox</h2>
      </div>
    </div>
  );
};

export default Dashboard;
