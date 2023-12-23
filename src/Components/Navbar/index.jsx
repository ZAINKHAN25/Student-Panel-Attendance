import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar({ home }) {
    const navigateTo = useNavigate();

    return (
        <div className='d-flex navbarwrapper'>
            <div className='fw-bold fs-5'>
                {home === true ? (
                    <span style={{cursor: "pointer"}} onClick={() => navigateTo('/')}> {true && "<"} Home</span>
                ) : (
                    'Hello, Zain👋'
                )}
            </div>
            <div className='inputareadiv'>
                <div className='inputdivnavbar'>
                    <input
                        type='text'
                        className='inputofnavbar'
                        placeholder='Search a Student'
                        id='searchInput'
                    />
                    <i className='fa-solid fa-magnifying-glass'></i>
                </div>
                <img
                    className='imgofnavbar'
                    src='https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpg?w=2000'
                    alt='User Avatar'
                    onClick={ () => navigateTo("/admin-profile")}
                    title='Profile page'
                />
            </div>
        </div>
    );
}

export default Navbar;
