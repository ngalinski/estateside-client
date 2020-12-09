import React from "react";
import "./css/PropertyGridComponent.css"

class IndividualPropertyDetailComponent extends React.Component {
    render() {
        return (
            <div id="booking" className="section">
                <div className="section-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-md-push-5">
                                <div className="booking-cta">
                                    <h1>Details about property</h1>
                                    <h3>Location: {this.props.propertyTitle}</h3>
                                    <h4>ZPID: {this.props.propertyZpid}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndividualPropertyDetailComponent
