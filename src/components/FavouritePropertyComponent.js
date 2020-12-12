import React from 'react';
import PropertyGridComponent from "./PropertyGridComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";

export default class FavouriteProperty extends React.Component {
    state = {
        userId: '',
        properties: [],
        hits: 0,
        propertySearchPage: 1
    };

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

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.setState({userId: userId});
        console.log(userId)
        console.log(this.state.userId)
        this.setState(() => {
            PropertyService.findFavouriteProperties(userId)
                .then(response => {
                    console.log(response)
                    this.setState({
                                      properties: response,
                                      hits: response.total
                                  })
                    console.log(this.state.properties)
                });
        })
    }

    render() {
        return (
            <div>
                <div className="home-page-top">
                    <TopNavigationComponent state={this.props.state}
                                            login={this.props.login}
                                            logout={this.props.logout}
                                            updateSelectedNavItem={this.props.updateSelectedNavItem}
                                            toggleProfileUpdated={this.props.toggleProfileUpdated}
                                            toggleContactRequested={this.props.toggleContactRequested}
                                            updateContact={this.props.updateContact}
                    />
                </div>
                {this.state.userId && this.state.properties && this.state.properties.length > 0 &&
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
                                        submitAppointment={this.submitAppointment}
                                        updateAppointmentDate={this.updateAppointmentDate}
                                        updateAppointmentMessage={this.updateAppointmentMessage}
                                        showOptions={true}/>
                }

                <br/>
            </div>
        )
    }
}