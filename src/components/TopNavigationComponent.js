import React from 'react';
import './topNavigatation.css'
import {Link} from "react-router-dom";

const TopNavigationComponent = () => {

    return (
        <div className="topnav">
            <ul className="icons">
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li>
                    <Link to="/register" className="icon solid fa-user-plus"/>
                </li>

                <li>
                    <Link to="/login" className="icon solid fa-sign-in-alt"/>
                </li>

                <li>
                    <Link to="/profile" className="icon solid fas fa-user"/>
                </li>
                <li>
                    <Link to="privacy-policy/privacy-policy.html"
                          class="icon solid fa-info-circle" title="privacy policy">
                        <span className="label">Privacy Policy</span>
                    </Link>
                </li>
                <li>
                    <Link to="help/help.html" className="icon solid fa-question">
                        <span className="label">Help</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default TopNavigationComponent
