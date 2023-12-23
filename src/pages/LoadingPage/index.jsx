import React from 'react'
import './LoadingPage.css';
import smitLogo from '../../Images/Smit-logo.png'

function LoadingPage() {
    console.log("me chal gya hoon");
    return (
        <div className="loading-container">
            <img
                src={smitLogo}
                alt="loading"
                className="loading-image"
            />
            <div className="loading-circle">
            </div>
        </div>
    );
}

export default LoadingPage