import React from 'react';
import './css/HomeComponent.css'
import {Link} from "react-router-dom";

const PropertySearchComponent = () => {
    return (
        <div>
            <div id="signup-form">
                <input type="text" name="email" id="email"
                       placeholder="Search for City"/>
                <button>
                    <Link to="/search">
                    Search
                    </Link>
                </button>
                <button id="wbdv-search" type="submit" className="btn btn-lg btn-default">
                    <Link to="/search">
                        Search→
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default PropertySearchComponent
