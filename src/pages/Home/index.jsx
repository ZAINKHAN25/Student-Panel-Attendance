import React from 'react';
import './Home.css';

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import AllStudents from "../../Components/AllStudents/index.jsx";

function Home() {
  return (
    <div className="d-flex homeWrapper flex-wrap">
      <Sidebar currentPage={"View Your Attendance"} />
      <div className='navbarofhome'>
        <Navbar />
        <div className='d-flex justify-content-between px-5 flex-wrap my-3'>
          <h2 className='text-center' style={{ color: "#0873b9" }}>View Your Attendence</h2>
          <button type="button" className="btn btn-primary">Mark Attendence</button>
        </div>
        <AllStudents />
      </div>
    </div>
  )
}

export default Home;