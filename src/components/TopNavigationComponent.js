import React from 'react';
import './topNavigatation.css'
import {Link} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import Tooltip from "@material-ui/core/Tooltip";

const TopNavigationComponent = ({isLoggedIn, userProfile, login, logout}) => {

    return (
        <div className="topnav">
            <ul className="icons">
                <Tooltip title="Home">
                    <li><Link to="/" className="active icon solid fa-home"/></li>
                </Tooltip>
                <Tooltip title="About">
                    <li><Link to="/" className="icon solid fa-info"/></li>
                </Tooltip>
                <Tooltip title="Contact">
                    <li><Link to="/" className="icon solid fa-envelope"/></li>
                </Tooltip>
                <li>
                    <Tooltip title="Register">
                        <Link to="/register" className="icon solid fa-user-plus"/>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Profile">
                        <Link to="/profile" className="icon solid fas fa-user"/>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Privacy Policy">
                        <Link to="privacy-policy/privacy-policy.html"
                              className="icon solid fa-info-circle">
                        </Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Help">
                        <Link to="help/help.html" className="icon solid fa-question">
                            <span className="label">Help</span>
                        </Link>
                    </Tooltip>
                </li>
                {!isLoggedIn &&
                 <li>
                     <Tooltip title="Login">
                         <LoginComponent clientLogin={login}/>
                     </Tooltip>
                 </li>
                }
                {isLoggedIn &&
                 <li>
                     <Tooltip title="Logout">
                         <LogoutComponent logout={logout}/>
                     </Tooltip>
                 </li>
                }
            </ul>
        </div>
    )
}

export default TopNavigationComponent
