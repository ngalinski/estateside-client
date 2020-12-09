import React from "react";

const PaginationComponent = ({handlePrevClick, handleNextClick, state, hits}) => {
    return (
        <div className="paginated-btn-set">
            <a href="#root">
                <button className="btn-primary" onClick={handlePrevClick}
                        disabled={state.propertySearchPage === 1}>
                    <i className="fa fa-arrow-left" aria-hidden="true"/>
                </button>
            </a>
            <span> Page {state.propertySearchPage} of {Math.ceil(hits / 12)}</span>
            <a href="#root">
                <button className="btn-primary" onClick={handleNextClick}
                        disabled={state.propertySearchPage === Math.ceil(hits / 12)}>
                    <i className="fa fa-arrow-right" aria-hidden="true"/>
                </button>
            </a>
        </div>
    )
}

export default PaginationComponent;
