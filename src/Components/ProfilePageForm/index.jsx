import React from 'react';
import './ProfilePageForm.css';

function AddStudentForm() {

    function openimg() {
        var inputofimg = document.querySelector("#inputGroupFile01");
        inputofimg.click()
    }


    return (
        <div className='addStudentform m-5 py-5'>
            <label className="col-form-label">Update student image:</label>
            <div className='imgdivofprofileadmin'>
                <img
                    src="https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpg?w=2000"
                    alt="Profile Image"
                    className="imgofprofile"
                    onClick={openimg}
                />
                <img
                    src="https://us.123rf.com/450wm/elnurss/elnurss1805/elnurss180500039/101915316-photo-camera-vector-icon.jpg?ver=6"
                    className='imgofsecond imgofprofile'
                    alt="Alternate Image"
                    onClick={openimg}
                />
            </div>

            <label className="col-form-label">Update student first name and last name here:</label>
            <div className="input-group">
                <input type="text" placeholder='First Name' aria-label="First name" className="form-control" />
                <input type="text" placeholder='Last Name' aria-label="Last name" className="form-control" />
            </div>
            <label className="col-form-label">Update student email here:</label>
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Admin Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button type="button" className="btn btn-primary mt-5">Update Student Profile</button>
            <div className="input-group opacity-0 inputdivofpictureprofile position-absolute left-0">
                <input type="file" className="form-control" id="inputGroupFile01" />
            </div>
        </div>
    );
}

export default AddStudentForm;
