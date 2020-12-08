import React from "react";
import PropertyCardComponent from "./PropertyCardComponent";
import FooterComponent from "./FooterComponent";
import "./css/PropertyGridComponent.css"

const PropertyGridComponent = ({
                                   state, login, logout, updateSelectedNavItem, toggleProfileUpdated,
                                   toggleContactRequested, updateContact, properties, hits, handleClick
                               }) => {
    return (
        <div className="wbdv-property">
            <div>
                <div className="container form-group row property-body">
                    {
                        properties.map(property =>
                                           <PropertyCardComponent {...property}
                                           />)
                    }
                </div>
                <div className="paginated-btn-set">
                    <button className="btn-primary" disabled={state.propertySearchPage === 1}>Prev
                    </button>
                    <span> Page {state.propertySearchPage} of {Math.ceil(hits / 12)}</span>
                    <button className="btn-primary"
                            disabled={state.propertySearchPage === Math.ceil(hits / 12)}>Next
                    </button>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default PropertyGridComponent;
