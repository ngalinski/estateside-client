import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";
import Modal from 'react-modal'
import {NewListingComponent} from "./NewListingComponent";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default class SearchPropertyNavigationComponent extends React.Component {

    constructor() {
        super()

        this.state = {
            isActive: false
        }
    }

    toggleModal = () => {
        this.setState({
                          isActive: !this.state.isActive
                      })
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }

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
                        <Tooltip title="Enter details for creation of new property listing">
                            <Link onClick={this.toggleModal}>
                                Landlord: Create new property listing
                            </Link>
                        </Tooltip>

                        <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}
                               style={customStyles}>
                            <div className="container">
                                <NewListingComponent/>
                                <button onClick={this.toggleModal}>
                                    Close modal
                                </button>
                            </div>
                        </Modal>
                    </li>
                </ul>
            </div>
        )
    }

}
