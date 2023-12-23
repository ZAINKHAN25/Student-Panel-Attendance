import React from 'react';
import './ProfilePage.css';

import Navbar from '../../Components/Navbar/index.jsx'
import ProfilePageForm from '../../Components/ProfilePageForm/index.jsx'

function ProfilePage() {
  return (
    <div className='porfilepageWrapper'>
      <Navbar home={true}/>
      <h2 className='text-center' style={{ color: "#0873b9" }}>Update Admin Profile</h2>
      <ProfilePageForm />
    </div>
  )
}

export default ProfilePage;