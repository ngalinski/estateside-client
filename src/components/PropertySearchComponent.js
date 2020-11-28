import React from 'react';
import './css/HomeComponent.css'
import {Link} from "react-router-dom";

const PropertySearchComponent = () => {
    return (
        <div>
            <div id="signup-form">
                <input type="text" name="email" id="email"
                       placeholder="Search for City"/>
                    <Link to="/search">
                        <button>
                            Search
                        </button>
                    </Link>
                    <Link to="/search">
                        <button id="wbdv-search" type="submit" className="btn btn-lg btn-default wbdv-search-btn">
                            Search→
                        </button>
                    </Link>
            </div>
        </div>
    )
}

export default PropertySearchComponent
