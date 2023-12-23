import React from 'react';
import './classDetail.css';  // Import your CSS file

import classDetail from '../../dummyData/classDetail.js';

function ClassDetail() {
    return (
        <div className='classDetailWrapper m-5 p-5'>
            {/* modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Class Detail</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>Class Name: <b>Web And App</b></div>
                            <div>Sir Name: <b>Muhammad Sufiyan</b></div>
                            <div>Batch Number: <b>12</b></div>
                            <div>Class Timing: <b>04:30 PM</b></div>
                            <div>Total Days: <b>Monday, Wednesday, Friday</b></div>
                            <div>Total Students in Class: <b>150</b></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="headingAreaclassDetail d-flex px-3">
                <span style={{ flex: 0.3 }}>S/no:</span>
                <span style={{ flex: 1 }}>Class Name:</span>
                <span style={{ flex: 1 }}>Class Timings:</span>
                <span style={{ flex: 1 }}>Sir Name:</span>
                <span style={{ flex: 1 }}>Class Days:</span>
            </div>

            <div className='mapingdivclassDetail'>
                {classDetail.map((classDetailsingle, i) => (
                    <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='d-flex singledivofclassDetail px-3' key={i}>
                        <span style={{ flex: 0.3 }}>{i + 1}</span>
                        <span style={{ flex: 1 }}>{classDetailsingle.ClassName}</span>
                        <span style={{ flex: 1 }}>{classDetailsingle.ClassTiming}</span>
                        <span style={{ flex: 1 }}>{classDetailsingle.SirName}</span>
                        <span style={{ flex: 1 }}>{
                            classDetailsingle.ClassDays.map(
                                (x, i) => (i + 1) === classDetailsingle.ClassDays.length ? (<span>{x}</span>) : (<span>{x}, </span>)
                            )
                        }</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClassDetail;
