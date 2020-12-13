import React from 'react';
import PropertyGridComponent from "./PropertyGridComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";
import AppointmentListComponent from "./AppointmentListComponent";
import AppointmentService from "../services/AppointmentService";

export default class VisitingAppointment extends React.Component {
    state = {
        appointments:  [
            // {
            //     userId: "111191948250174770569",
            //     zpid: "81855146",
            //     appointmentDate: "2020-12-23T00:00:00.000Z",
            //     message: "lklklklklk"
            // }
        ]

    };

    componentDidMount() {
        const userId = this.props.match.params.userId;
        const zpid = this.props.match.params.zpid;

        if (userId === null || userId === undefined || userId === '') { //search appointments by property
            this.setState(() => {
                AppointmentService.findAppointmentsForProperty(zpid)
                    .then(response => {
                        this.setState({
                                          appointments: response
                                      })
                        console.log(this.state.appointments)
                    });
            })
        }

        if (zpid === null || zpid === undefined || zpid === '') { //search appointments by user
            this.setState(() => {
                AppointmentService.findAppointmentsForUser(userId)
                    .then(response => {
                        this.setState({
                                          appointments: response
                                      })
                        console.log(this.state.appointments)
                    });
            })
        }


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
                    <header id="wbdv-about-heading">
                        <h1>Your appointments</h1>
                    </header>
                </div>


                {this.state.appointments.length > 0 &&
                 <AppointmentListComponent state={this.props.state}
                                           login={this.props.login}
                                           logout={this.props.logout}
                                           updateSelectedNavItem={this.props.updateSelectedNavItem}
                                           toggleProfileUpdated={this.props.toggleProfileUpdated}
                                           toggleContactRequested={this.props.toggleContactRequested}
                                           updateContact={this.props.updateContact}
                                           appointments={this.state.appointments}

                 />
                }

                <br/>
            </div>
        )
    }
}
