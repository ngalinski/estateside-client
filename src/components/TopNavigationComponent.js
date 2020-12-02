import React from 'react';
import './css/topNavigatation.css'
import {Link} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import Tooltip from "@material-ui/core/Tooltip";

const TopNavigationComponent = ({state, login, logout, updateSelectedNavItem}) => {
    return (
        <div className="topnav">
            <ul className="icons">
                <Tooltip title="Home">
                    <li><Link to="/" className={`${state.selectedNavItem === "Home" ? "active"
                                                                                    : ""} icon solid fa-home`}
                              onClick={() => updateSelectedNavItem("Home")}/></li>
                </Tooltip>
                <Tooltip title="About">
                    <li><Link to="/about" className={`${state.selectedNavItem === "About" ? "active"
                                                                                          : ""} icon solid fa-info`}
                              onClick={() => updateSelectedNavItem("About")}/></li>
                </Tooltip>
                <Tooltip title="Contact">
                    <li><Link to="/contact"
                              className={`${state.selectedNavItem === "Contact" ? "active"
                                                                                : ""} icon solid fa-envelope`}
                              onClick={() => updateSelectedNavItem("Contact")}/></li>
                </Tooltip>
                {state.isLoggedIn &&
                 <Tooltip title="Profile">
                     <li><Link to="/profile"
                               className={`${state.selectedNavItem === "Profile" ? "active"
                                                                                 : ""} icon solid fa-user`}
                               onClick={() => updateSelectedNavItem("Profile")}/></li>
                 </Tooltip>
                }
                <li>
                    <Tooltip title="Privacy Policy">
                        <Link to="/privacy" onClick={() => updateSelectedNavItem("Privacy")}
                              className={`${state.selectedNavItem === "Privacy" ? "active"
                                                                                : ""} icon solid fa-info-circle`}>
                        </Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Help">
                        <Link to="/help" className={`${state.selectedNavItem === "Help" ? "active"
                                                                                        : ""} icon solid fa-question`}
                              onClick={() => updateSelectedNavItem("Help")}>
                            <span className="label">Help</span>
                        </Link>
                    </Tooltip>
                </li>
                {!state.isLoggedIn &&
                 <li>
                     <LoginComponent clientLogin={login}
                                     role="user"
                                     buttonText="Login"/>
                 </li>
                }
                {!state.isLoggedIn &&
                 <li>
                     <LoginComponent clientLogin={login}
                                     role="landlord"
                                     buttonText="Landlord Login"/>
                 </li>
                }
                {state.isLoggedIn &&
                 <li>
                     <LogoutComponent logout={logout}
                                      updateSelectedNavItem={updateSelectedNavItem}/>
                 </li>
                }
            </ul>
        </div>
    )
}

export default TopNavigationComponent
