import React from 'react';
import './topNavigatation.css'
import {Link} from "react-router-dom";

const TopNavigationComponent = () => {

    return (
            <div className="topnav">
                <ul className="icons">
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/about" title="about">About</Link></li>
                    <li><Link to="/contact" title="contact">Contact</Link></li>
                    <li>
                        <Link to="/register" className="icon solid fa-user-plus" title="register">
                        </Link>
                    </li>

                    <li>
                        <Link to="/login" className="icon solid fa-sign-in-alt" title="login">
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile" className="icon solid fas fa-user" title="profile">
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacy"
                              class="icon solid fa-info-circle" title="privacy policy">
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" className="icon solid fa-question" title="help">
                        </Link>
                    </li>
                </ul>
            </div>
    )
}

export default TopNavigationComponent
