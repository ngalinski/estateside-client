import SearchPropertyNavigationComponent from "./SearchPropertyNavigationComponent";
import React from "react";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";
import PropertyGridComponent from "./PropertyGridComponent";

export default class LandlordPortal extends React.Component {
    state = {
        // not google id but id in mongodb
        landlordId: '',
        properties: [],
        hits: 0,
        propertySearchPage: 1,
        newProperty: {
            zpid: '',
            street: '', city: '', house: '', state: '', zip: '',
            date: '',
            zestimate: '',
            userId: ''
        }
    };

    componentDidMount() {
        if (this.props.match.params.landlordId) {
            this.setState(prevState => ({
                landlordId: this.props.match.params.landlordId
            }), () => {
                PropertyService.findHostedProperties(this.state.landlordId)
                    .then(response => {
                              this.setState(prevState => ({
                                  properties: response.bundle,
                                  hits: response.total
                              }))
                          }
                    )
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.landlordId !== this.props.match.params.landlordId) {
            this.setState(prevState => ({
                landlordId: this.props.match.params.landlordId
            }), () => {
                PropertyService.findHostedProperties(this.state.landlordId)
                    .then(response =>
                              this.setState(prevState => ({
                                  properties: response.bundle,
                                  hits: response.total
                              }))
                    )
            })
        }
    }

    createListing = () => {
        PropertyService.createProperty({
                                           zpid: Date.now(),
                                           address: {
                                               full: (this.state.newProperty.house)
                                                     ? this.state.newProperty.house + ', ' : '' +
                                                                                             (this.state.newProperty.street)
                                                                                             ? this.state.newProperty.street
                                                                                               +
                                                                                               ', '
                                                                                             : ''
                                                                                               + (this.state.newProperty.city)
                                                                                               ? this.state.newProperty.city
                                                                                                 + ', '
                                                                                               : ''
                                                                                                 + (this.state.newProperty.state)
                                                                                                 ? this.state.newProperty.state
                                                                                                   + ', '
                                                                                                 : ''
                                                                                                   + (this.state.newProperty.zip)
                                                                                                   ? this.state.newProperty.zip
                                                                                                   : '',
                                               street: this.state.newProperty.street,
                                               city: this.state.newProperty.city,
                                               house: this.state.newProperty.house,
                                               state: this.state.newProperty.state,
                                               zip: this.state.newProperty.zip,
                                               zip4: this.state.newProperty.zip
                                           },
                                           date: this.state.newProperty.date,
                                           zestimate: this.state.newProperty.zestimate,
                                           rental: {zestimate: this.state.newProperty.zestimate},
                                           userId: this.state.landlordId
                                       })
            .then(newProperty => {
                this.setState(prevState => ({
                    properties: [...prevState.properties, newProperty],
                    hits: prevState.hits + 1
                }));
                window.alert("Property added!")
            })
    };
    updateNewProperty = (newProperty) => this.setState(prevState => ({
        newProperty: newProperty
    }));

    handleNextClick = () => {
        PropertyService.findPropertiesForCity(this.state.location,
                                              (this.state.propertySearchPage)
                                              * 12)
            .then(response => {
                this.setState({
                                  properties: response.bundle,
                                  propertySearchPage: this.state.propertySearchPage + 1
                              });
                window.scrollTo(0, 0);
            });
    };

    handlePrevClick = () => {
        PropertyService.findPropertiesForCity(this.state.location,
                                              (this.state.propertySearchPage - 2)
                                              * 12)
            .then(response => {
                this.setState({
                                  properties: response.bundle,
                                  propertySearchPage: this.state.propertySearchPage - 1
                              });
                window.scrollTo(0, 0);
            });
    };

    render() {
        return (
            <div>
                <TopNavigationComponent state={this.state}
                                        login={this.props.login}
                                        logout={this.props.logout}
                                        updateSelectedNavItem={this.props.updateSelectedNavItem}
                                        toggleProfileUpdated={this.props.toggleProfileUpdated}
                                        toggleContactRequested={this.props.toggleContactRequested}
                                        updateContact={this.props.updateContact}
                />
                <SearchPropertyNavigationComponent
                    landlordId={this.props.state.userProfile.userId}
                    createListing={this.createListing}
                    updateNewProperty={this.updateNewProperty}
                    state={this.state}/>

                {this.props.match.params.landlordId && this.state.properties.length > 0 &&
                 <PropertyGridComponent parentState={this.props.state}
                                        state={this.state}
                                        login={this.props.login}
                                        logout={this.props.logout}
                                        updateSelectedNavItem={this.props.updateSelectedNavItem}
                                        toggleProfileUpdated={this.props.toggleProfileUpdated}
                                        toggleContactRequested={this.props.toggleContactRequested}
                                        updateContact={this.props.updateContact}
                                        properties={this.state.properties}
                                        hits={this.state.hits}
                                        handleNextClick={this.handleNextClick}
                                        handlePrevClick={this.handlePrevClick}
                                        showOptions={false}
                 />
                }
            </div>
        )
    }
}
