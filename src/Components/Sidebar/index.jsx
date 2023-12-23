import React from 'react';
import "./sidebar.css";
import smitLogo from '../../Images/Smit-logo.png'
import { useNavigate } from 'react-router-dom';

function Sidebar({ currentPage }) {
    const navigate = useNavigate();

    let allsidebardata = [
        {
            sidename: "View Your Attendance",
            addresofside: "/",
            icon: `fa-solid fa-clipboard-user`
        },
        {
            sidename: "View Your Class Detail",
            addresofside: "view-your-class",
            icon: `fa-solid fa-users-viewfinder`
        }
    ]

    return (
        <div className='sidebarWrapper'>
            <img src={smitLogo} className='sidebarimg' alt="Smit Logo" />
            <div className='divofsidebardivs'>
                {allsidebardata.map((x, i) => {
                    if (x.sidename === currentPage) {
                        return (<span key={i}></span>)
                    }
                    return (
                        <div key={i} onClick={() => navigate(x.addresofside)} className='singlesidebardiv'>
                            <i className={x.icon}></i>
                            <span className='txtofsidebar'>{x.sidename}</span>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => navigate("/login")} className='logoutdiv'><span>Logout</span> <i className="fa-solid fa-right-from-bracket ms-2"></i></button>
        </div>
    )
}

export default Sidebar;