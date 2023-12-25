import React from 'react';
import './Home.css';

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import AllStudents from "../../Components/AllStudents/index.jsx";

function Home() {

  async function getLocation() {
    const campusLocation = {
      minLongitude: 24.9191172,
      maxLongitude: 24.9195587,
      minLatitude: 67.0016167,
      maxLatitude: 67.0018284
    };


    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;

      if (
        latitude >= campusLocation.minLatitude ||
        latitude <= campusLocation.maxLatitude ||
        longitude >= campusLocation.minLongitude &&
        longitude <= campusLocation.maxLongitude
      ) {
        console.log("You are in the right place. Logging attendance...");
        // Add logic to log attendance here
      } else {
        console.log("You are in the wrong place. Attendance not marked.");
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  }


  return (
    <div className="d-flex homeWrapper flex-wrap">
      <Sidebar currentPage={"View Your Attendance"} />
      <div className='navbarofhome'>
        <Navbar />
        <div className='d-flex justify-content-between px-5 flex-wrap my-3'>
          <h2 className='text-center' style={{ color: "#0873b9" }}>View Your Attendance</h2>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#markattendance">Mark Attendance</button>
        </div>
        <AllStudents />
      </div>
      {/* Modal */}
      <div className="modal fade" id="markattendance" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Mark Attendance</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button type="button" className="btn btn-primary" onClick={getLocation}>Mark in</button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
