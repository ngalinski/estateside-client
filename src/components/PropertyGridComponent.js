import React from "react";
import PropertyCardComponent from "./PropertyCardComponent";
import FooterComponent from "./FooterComponent";
import "./css/PropertyGridComponent.css"
import PaginationComponent from "./PaginationComponent";

const PropertyGridComponent = ({
                                   state, login, logout, updateSelectedNavItem, toggleProfileUpdated,
                                   toggleContactRequested, updateContact, properties, hits,
                                   handleNextClick, handlePrevClick
                               }) => {
    return (
        <div className="wbdv-property">
            <div className="container">
                <PaginationComponent handlePrevClick={handlePrevClick}
                                     handleNextClick={handleNextClick} state={state}
                                     hits={hits}/>
                <div className="form-group row property-body">
                    {
                        properties.map(property =>
                                           <PropertyCardComponent {...property}
                                           />)
                    }
                </div>
                <PaginationComponent handlePrevClick={handlePrevClick}
                                     handleNextClick={handleNextClick} state={state}
                                     hits={hits}/>
            </div>
            <FooterComponent/>
        </div>
    )
}

export default PropertyGridComponent;
