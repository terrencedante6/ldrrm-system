import React from "react";

const MobileRequestPage = () => {
  return (
    <div className="dashboard-Wrapper">
      <div className="styles.buttonContainer">
        <button className="button">All Request</button>
        <button className="button2">Ongoing</button>
        <button className="button2">Completed</button>
        <button className="button2">Archived</button>
      </div>

      <div className="mobilerequest-container">
        <div className="styles.searchContainer">
          <input type="text" className="msearch" placeholder="Request no." />
          <input type="text" className="msearch" placeholder="Name" />
          <input type="text" className="msearch" placeholder="Request type" />
          <input type="text" className="msearch" placeholder="Search requests" />
          <input className="msearch2" type="datetime-local" />
          <button className="msearch3">{"<<"}</button>
          <button className="msearch3">{">>"}</button>
          <button className="msearch4">Create Request</button>

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
      <tr>
        <td><a href="#" className="span-row">09-xxx-xxx</a></td>
        <td><a href="#" className="span-row">Junnard Ty Olbo</a></td>
        <td><a href="#" className="span-row">Typhoon</a></td>
        <td><a href="#" className="span-row">Feb. 25/1PM</a></td>
        <td><a href="#" className="span-row">Not Started</a></td>
      </tr>
      <tr>
        <td><a href="#" className="span-row">09-xxx-xxx</a></td>
        <td><a href="#" className="span-row">Terrence Paul K. Dante</a></td>
        <td><a href="#" className="span-row">Vehicular Accident</a></td>
        <td><a href="#" className="span-row">Feb. 25/2PM</a></td>
        <td><a href="#" className="span-row">Ongoing</a></td>
      </tr>
      <tr>
        <td><a href="#" className="span-row">09-xxx-xxx</a></td>
        <td><a href="#" className="span-row">Bomba S. Ticsideeye</a></td>
        <td><a href="#" className="span-row">Landslide</a></td>
        <td><a href="#" className="span-row">Feb. 25/3PM</a></td>
        <td><a href="#" className="span-row">Ongoing</a></td>
      </tr>
      <tr>
        <td><a href="#" className="span-row">09-xxx-xxx</a></td>
        <td><a href="#" className="span-row">Bomba S. Ticsideeye</a></td>
        <td><a href="#" className="span-row">Landslide</a></td>
        <td><a href="#" className="span-row">Feb. 25/3PM</a></td>
        <td><a href="#" className="span-row">Ongoing</a></td>
      </tr>
      <tr>
        <td><a href="#" className="span-row">09-xxx-xxx</a></td>
        <td><a href="#" className="span-row">Bomba S. Ticsideeye</a></td>
        <td><a href="#" className="span-row">Landslide</a></td>
        <td><a href="#" className="span-row">Feb. 25/3PM</a></td>
        <td><a href="#" className="span-row">Ongoing</a></td>
      </tr>
      <tr>
        <td><a href="#" className="span-row">09-xxx-xxx</a></td>
        <td><a href="#" className="span-row">Bomba S. Ticsideeye</a></td>
        <td><a href="#" className="span-row">Landslide</a></td>
        <td><a href="#" className="span-row">Feb. 25/3PM</a></td>
        <td><a href="#" className="span-row">Ongoing</a></td>
      </tr>
      <tr>
        <td><a href="#" className="span-row">09-xxx-xxx</a></td>
        <td><a href="#" className="span-row">Bomba S. Ticsideeye</a></td>
        <td><a href="#" className="span-row">Landslide</a></td>
        <td><a href="#" className="span-row">Feb. 25/3PM</a></td>
        <td><a href="#" className="span-row">Ongoing</a></td>
      </tr>
      <tr>
        <td><a href="#" className="span-row">09-xxx-xxx</a></td>
        <td><a href="#" className="span-row">Bomba S. Ticsideeye</a></td>
        <td><a href="#" className="span-row">Landslide</a></td>
        <td><a href="#" className="span-row">Feb. 25/3PM</a></td>
        <td><a href="#" className="span-row">Complete</a></td>
      </tr>
      
      


    </tbody>
  </table>
</div>

      </div>
      </div>
    </div>
  );
};

export default MobileRequestPage;
