import React from "react";
import "./css/PropertyGridComponent.css"
import {connect} from "react-redux";
import PropertyService from "../services/PropertyService";

class IndividualPropertyDetailComponent extends React.Component {
    state = {
        property: {},
    };

    componentDidMount() {
        const propertyId = this.props.property.zpid
        console.log(propertyId)
        this.setState( () => {
            PropertyService.findPropertyById(propertyId)
                .then(response => {
                    console.log(response)
                    this.setState({
                                      property: response.bundle,
                                  })
                });
        })
    }

    render() {
        return (
            <div id="booking" className="section">
                <div className="section-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-md-push-5">
                                <div className="booking-cta">
                                    <h1>Details about property</h1>
                                    <h3>Location: {this.props.property.address}</h3>
                                    <h4>ZPID: {this.props.property.zpid}</h4>
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
