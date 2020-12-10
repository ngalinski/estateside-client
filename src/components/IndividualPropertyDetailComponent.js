import React from "react";
import "./css/PropertyGridComponent.css"
import PropertyService from "../services/PropertyService";
import MapComponent from "./MapComponent";

class IndividualPropertyDetailComponent extends React.Component {
    state = {
        property: {}
    };

    componentDidMount() {
        const propertyId = this.props.property.zpid
        // console.log(propertyId)
        this.setState(() => {
            PropertyService.findPropertyById(propertyId)
                .then(response => {
                    console.log(response)
                    this.setState({
                                      property: response
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
                            <div className="col-md-4 col-md-pull-7">
                                <div className="property-detail">
                                    <h1>Details</h1>
                                    <h4> Address: {this.state.property.address}</h4>

                                    <h6> Latitude: {this.state.property.coordinates &&
                                                    this.state.property.coordinates[1]}</h6>
                                    <h6> Longitude: {this.state.property.coordinates &&
                                                     this.state.property.coordinates[0]}</h6>
                                    <h6>Owner name: {this.state.property.ownerName}</h6>
                                    <h6>ZPID: {this.state.property.zpid}</h6>
                                    <p>Our property appointments can be booked here. Once you make
                                        an
                                        appointment, a showing agent will contact you to confirm
                                        the site visit. Feel free to ask us any questions about the
                                        Property during the visit appointment.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-7 col-md-push-5">
                                <div className="booking-form">
                                    {
                                        this.state.property.coordinates &&
                                        <MapComponent latitude={parseFloat(this.state.property.coordinates[1])}
                                                      longitude={parseFloat(this.state.property.coordinates[0])
                                        }/>
                                    }
                                    {/*<MapComponent latitude={this.state.property.coordinates &&*/}
                                    {/*                            parseFloat(this.state.property.coordinates[0])}*/}
                                    {/*                  longitude={this.state.property.coordinates &&*/}
                                    {/*                             parseFloat(this.state.property.coordinates[1])}/>*/}
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
