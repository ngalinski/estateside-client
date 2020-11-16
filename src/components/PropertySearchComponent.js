import React from 'react';
import './css/HomeComponent.css'

const PropertySearchComponent = () => {
    return (
        <div>
            <div id="signup-form">
                <input type="text" name="email" id="email"
                       placeholder="Search for City"/>
                <button>
                    Search
                </button>
            </div>
        </div>
    )
}

export default PropertySearchComponent
