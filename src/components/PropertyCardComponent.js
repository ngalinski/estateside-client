import React from "react";
import {Link} from "react-router-dom";
import "./css/PropertyCardComponent.css"
import Modal from 'react-modal'

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

export default class PropertyCardComponent extends React.Component{
    render() {
        return (
            // creating a property card
            <div className="col-3 col-sm-6 col-md-3 wbdv-property-card">
                <div className="card h-100">
                    <img className="card-img-top" src={this.props.property.imageUrl}/>
                    <div className="card-body bg-primary">
                        <h2>{this.props.property.rent}</h2>
                        <h4 className="card-title">
                            <Link to={`properties/${this.props.property.address}`} title="view the property"
                                  className="wbdv-hyperlink">{this.props.property.address}</Link>
                        </h4>
                        <p className="card-text text-white">
                            Available: {this.props.property.available} <br/>
                            Contact: {this.props.property.contactInfo}
                        </p>
                    </div>
                    <div className="card-footer">
                        <i title="manage appointments"
                           className="fa fa-address-book wbdv-property-card-icon float-left"></i>
                        <i title="delete property"
                           className="fa fa-trash-alt wbdv-property-card-icon float-right"></i>
                    </div>
                </div>
            </div>
        )
    }

}
