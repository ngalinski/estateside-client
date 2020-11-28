import React, {useState} from 'react';
import './topNavigatation.css'
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Modal from "react-modal"
import ReactDOM from "react-dom";

export const PropertyTopNavigationComponent = () => {
        return (
            <div>
                <div className="topnav">
                    <ul className="icons">
                        <li>
                            <Tooltip title="See all properties">
                                <Link to="/properties">All Properties</Link>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip title="Renter: Your favourite properties">
                                <Link to="/properties">Renter: Your favourite Properties</Link>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip title="Landlord: Your hosted properties">
                                <Link to="/properties">Landlord: Your hosted Properties</Link>
                            </Tooltip>
                        </li>
                        <li>
                            <Link to="#">
                                Landlord: Create new property listing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        )

}
