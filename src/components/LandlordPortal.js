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
        propertySearchPage: 1
    };

    componentDidMount() {
        if (this.props.match.params.landlordId) {
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
                <SearchPropertyNavigationComponent landlordId={this.props.state.userProfile.userId}/>
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
