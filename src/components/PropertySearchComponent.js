import React from 'react';
import './home/css/HomeComponent.css'

export default class PropertySearchComponent extends React.Component {

    render() {
        return(
            <div>
                <form id="signup-form" method="post" action="#">
                    <input type="email" name="email" id="email" placeholder="Search for Address, City, or Zip" />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }

}