"use client";

import { useState } from "react";

const MobileRequestPage = () => {
  const data = [
    {
      id: 1,
      requestNo: "123",
      name: "John",
      requestType: "Repair",
      date: "25/02/2024",
      status: "Ongoing",
    },
    {
      id: 2,
      requestNo: "124",
      name: "Alice",
      requestType: "Maintenance",
      date: "26/02/2024",
      status: "Completed",
    },
    {
      id: 3,
      requestNo: "125",
      name: "Bob",
      requestType: "Installation",
      date: "27/02/2024",
      status: "Pending",
    },
    {
      id: 4,
      requestNo: "126",
      name: "Emma",
      requestType: "Repair",
      date: "28/02/2024",
      status: "Ongoing",
    },
    {
      id: 5,
      requestNo: "127",
      name: "Michael",
      requestType: "Repair",
      date: "29/02/2024",
      status: "Completed",
    },
    {
      id: 6,
      requestNo: "128",
      name: "Sophia",
      requestType: "Maintenance",
      date: "01/03/2024",
      status: "Ongoing",
    },
    {
      id: 7,
      requestNo: "129",
      name: "William",
      requestType: "Repair",
      date: "02/03/2024",
      status: "Pending",
    },
    {
      id: 8,
      requestNo: "130",
      name: "Olivia",
      requestType: "Installation",
      date: "03/03/2024",
      status: "Completed",
    },
  ];
  const [currenData, setCurrentData] = useState(data);

  const OngoingData = data.filter((data) => data.status === "Ongoing");
  const Completed = data.filter((data) => data.status === "Completed");

  return (
    <div className="req-container">
      <div className="mobilerequest-container">
        <div className="req-buttons">
          <button className="button" onClick={() => setCurrentData(data)}>
            All Request
          </button>
          <button
            className="button"
            onClick={() => {
              setCurrentData(OngoingData);
            }}
            value={"Ongoing"}
          >
            Ongoing
          </button>
          <button
            className="button"
            value={"Completed"}
            onClick={() => setCurrentData(Completed)}
          >
            Completed
          </button>
          <button className="button">Archived</button>
        </div>
        <div className="styles.searchContainer">
          <input type="text" className="msearch" placeholder="Request no." />
          <input type="text" className="msearch" placeholder="Name" />
          <input type="text" className="msearch" placeholder="Request type" />
          <input
            type="text"
            className="msearch"
            placeholder="Search requests"
          />
          <input className="msearch2" type="datetime-local" />
          <button className="msearch3">{"<<"}</button>
          <button className="msearch3">{">>"}</button>
          <button className="msearch4">Create Request</button>
        </div>
        <div className="mobilerequest-container2">
          <table className="excel-table">
            <thead>
              <tr>
                <th>Request no</th>
                <th>Name</th>
                <th>Request Type</th>
                <th>Date and Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currenData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <a href="" className="span-row">
                      {item.requestNo}
                    </a>
                  </td>
                  <td>
                    <a href="" className="span-row">
                      {item.name}
                    </a>
                  </td>
                  <td>
                    <a href="" className="span-row">
                      {item.requestType}
                    </a>
                  </td>
                  <td>
                    <a href="" className="span-row">
                      {item.date}
                    </a>
                  </td>
                  <td>
                    <a href="" className="span-row">
                      {item.status}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MobileRequestPage;
