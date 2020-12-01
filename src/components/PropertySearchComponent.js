import React from 'react';
import './css/HomeComponent.css'
import {Link} from "react-router-dom";

const PropertySearchComponent = ({state, login, logout, updateSelectedNavItem}) => {
    return (
        <div>
            <div id="signup-form">
                <input type="text" name="email" id="email"
                       placeholder="Search for City"/>
                <Link to="/search">
                    <button className="btn-primary btn">
                        Search
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PropertySearchComponent
