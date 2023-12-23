import React from 'react';
import './Home.css';

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import ClassDetail from "../../Components/ClassDetail/index.jsx";

function Home() {
  return (
    <div className="d-flex homeWrapper">
      <Sidebar currentPage={"View Your Class Detail"} />
      <div className='navbarofhome'>
        <Navbar />
        <h2 className='text-center' style={{ color: "#0873b9" }}>View Your Class Detail</h2>
        <ClassDetail />
      </div>
    </div>
  )
}

export default Home;