import React from "react";
import {Link} from "react-router-dom";

// bootstrap import applies to the entire project and messes up the styling of other pages
import "bootstrap/dist/css/bootstrap.min.css"

const PropertyCardComponent = ({property}) => {
    return (
        // creating a property card
        <div className="col-sm-6 col-md-3 wbdv-property-card">
            <div className="card h-100">
                <img className="card-img-top" src={property.imageUrl} />
                <div className="card-body bg-primary">
                    <h2>{property.rent}</h2>
                    <h4 className="card-title">
                        <Link to={`properties/${property.address}`} title="view the property" className="wbdv-hyperlink">{property.address}</Link>
                    </h4>
                    <p className="card-text text-white">
                        Available: {property.available} <br/>
                        Contact: {property.contactInfo}
                    </p>
                </div>
                <div className="card-footer">
                    <i title="manage appointments" className="fa fa-address-book wbdv-property-card-icon float-left"></i>
                    <i title="delete property" className="fa fa-trash-alt wbdv-property-card-icon float-right"></i>
                </div>
            </div>
        </div>
    )
}

export default PropertyCardComponent;
