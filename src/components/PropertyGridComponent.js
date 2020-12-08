import React from "react";
import PropertyCardComponent from "./PropertyCardComponent";
import FooterComponent from "./FooterComponent";
import "./css/PropertyGridComponent.css"

const PropertyGridComponent = ({
                                   state, login, logout, updateSelectedNavItem, toggleProfileUpdated,
                                   toggleContactRequested, updateContact
                               }) => {
    return (
        <div className="wbdv-property">
            <div>
                <div className="container form-group row property-body">
                    {
                        state.properties.map(property =>
                                                 <PropertyCardComponent property={property}
                                                 />)
                    }
                </div>
            </div>
            <FooterComponent/>
        </div>

    )
}

export default PropertyGridComponent;
