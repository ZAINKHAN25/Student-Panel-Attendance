import React from 'react';
import './AllStudents.css';  // Import your CSS file

import allStudents from '../../dummyData/AllStudents.js';

function AllStudents() {
    return (
        <div className='AllStudentsWrapper m-5 p-5'>
            {/* modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Zain's Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div style={{ width: "100%" }}>
                                Student Img:
                                <div style={{ width: "100%", display: "flex", justifyContent: 'center' }}>
                                    <img src="https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpg?w=2000" alt="" className='seestudentmodalimg' />
                                </div>
                            </div>
                            <div>Student Name: <b>Zain</b></div>
                            <div>Student id: <b>WMA-130</b></div>
                            <div>Student Course: <b>Web and Mobile</b></div>
                            <div>Student Comes At: <b>05:00 PM</b></div>
                            <div>Student Leaves At: <b>07:00 PM</b></div>
                            <div>Date: <b>12/23/2023</b></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="headingAreaAllStudents d-flex px-3">
                <span style={{ flex: 0.3 }}>S/no:</span>
                <span style={{ flex: 1 }}>Comes At:</span>
                <span style={{ flex: 1 }}>Leaves At:</span>
                <span style={{ flex: 1 }}>Date:</span>
            </div>

            <div className='mapingdivallstudents'>
                {allStudents.map((student, i) => (
                    <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='d-flex singledivofallstudents px-3' key={i}>
                        <span style={{ flex: 0.3 }}>{i + 1}</span>
                        <span style={{ flex: 1 }}>{student.ComesAt}</span>
                        <span style={{ flex: 1 }}>{student.LeavesAt}</span>
                        <span style={{ flex: 1 }}>{student.DateOfAttendance}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllStudents;
