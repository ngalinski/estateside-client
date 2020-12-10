import React from 'react';
import PropertyGridComponent from "./PropertyGridComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";
import AppointmentService from "../services/AppointmentService";

export default class SearchResultComponent extends React.Component {
    state = {
        location: '',
        properties: [],
        hits: 0,
        propertySearchPage: 1,
        appointmentDate: new Date(),
        appointmentMessage: ''
    };

    updateAppointmentDate = (date) => {
        this.setState(prevState => ({
            appointmentDate: new Date(date)
        }))
    };

    updateAppointmentMessage = (message) => {
        this.setState(prevState => ({
            appointmentMessage: message
        }))
    };

    submitAppointment = (propertyId) => {
        AppointmentService.createAppointmentForProperty(propertyId, {
            userId: this.props.state.userProfile._id,
            propertyId: propertyId,
            appointmentDate: this.state.appointmentDate,
            message: this.state.appointmentMessage
        }).then(response => {
            window.alert('Appointment created!');
            console.log(response.json());
        })
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
        const location = this.props.match.params.location ? this.props.match.params.location
                                                          : "Boston";
        this.setState({location: location});
        let page = null
        if (this.props.match.params.page) {
            page = parseInt(this.props.match.params.page)
        }
        this.setState({propertySearchPage: parseInt(this.props.match.params.page)}, () => {
            PropertyService.findPropertiesForCity(location,
                                                  (this.state.propertySearchPage - 1)
                                                  * 12)
                .then(response => {
                    this.setState({
                                      properties: response.bundle,
                                      hits: response.total
                                  })
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
                {this.state.properties.length > 0 &&
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
