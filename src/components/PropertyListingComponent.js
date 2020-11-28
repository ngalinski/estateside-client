import React from 'react';
import './topNavigatation.css'
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import ReactDOM from "react-dom";

class PropertyTopNavigationComponent extends React.Component{
    state = { newListingShow: false };

    showModal = () => {
        this.setState({ newListingShow: true });
    };

    hideModal = () => {
        this.setState({ newListingShow: false });
    };

    render() {
        return (
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
                        <Tooltip title="Landlord: Create new property listing">
                            <Link to="#" onClick={this.showModal}>
                                Landlord: Create new property listing
                            </Link>
                        </Tooltip>
                    </li>
                </ul>
            </div>
        )
    }

}

const createNewContainer = document.createElement("div");
document.body.appendChild(createNewContainer);
// ReactDOM.render(<PropertyTopNavigationComponent />, createNewContainer);

export default PropertyTopNavigationComponent
