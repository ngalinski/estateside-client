import React from 'react';
import './css/HomeComponent.css'
import {Link} from "react-router-dom";

const PropertySearchComponent = ({state, login, logout, updateSelectedNavItem, updateSearchLocation}) => {
    return (
        <div>
            <div id="signup-form">
                <input type="text" name="email" id="email"
                       onChange={(event) => updateSearchLocation(event.target.value)}
                       placeholder="Search for City" value={state.searchLocation}/>
                <Link
                    to={`/search/${state.searchLocation === '' ? 'Boston' : state.searchLocation}`}>
                    <button className="btn-primary btn">
                        Search
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PropertySearchComponent
