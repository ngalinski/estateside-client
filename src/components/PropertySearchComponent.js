import React from 'react';
import './home/css/HomeComponent.css'

export default class PropertySearchComponent extends React.Component {

    render() {
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

}
