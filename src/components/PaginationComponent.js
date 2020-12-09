import React from "react";
import {NavLink} from "react-router-dom";

const PaginationComponent = ({handlePrevClick, handleNextClick, state, hits}) => {
    return (
        <div className="paginated-btn-set">
            <NavLink activeClassName={'root'} to={state.propertySearchPage > 1
                                                  ? `/search/${state.location}/page/${parseInt(
                    state.propertySearchPage) - 1}#` : '#'}>
                <button className="btn-primary" onClick={handlePrevClick}
                        disabled={state.propertySearchPage === 1}>
                    <i className="fa fa-arrow-left" aria-hidden="true"/>
                </button>
            </NavLink>
            <span> Page {state.propertySearchPage} of {Math.ceil(hits / 12)}</span>
            <NavLink activeClassName={'root'} to={state.propertySearchPage < Math.ceil(hits / 12)
                                                  ? `/search/${state.location}/page/${parseInt(
                    state.propertySearchPage) + 1}` : '#'}>
                <button className="btn-primary" onClick={handleNextClick}
                        disabled={state.propertySearchPage === Math.ceil(hits / 12)}>
                    <i className="fa fa-arrow-right" aria-hidden="true"/>
                </button>
            </NavLink>
        </div>
    )
}

export default PaginationComponent;
