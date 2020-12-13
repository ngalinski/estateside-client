import React from 'react';
import PropertyGridComponent from "./PropertyGridComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";
import AppointmentListComponent from "./AppointmentListComponent";

export default class VisitingAppointment extends React.Component {
    state = {
        appointments:  [
            {
                _id: "1",
                propertyId: "111",
                propertyAddress: "900 Huntington Avenue, Boston",
                date: "12-14-2020",
                time: "5pm",
                viewerId: "001",
                viewer: "Zoheb",
                landlord: "Jose",
                message: "I'm interested in renting your apartment."
            },
            {
                _id: "2",
                propertyId: "111",
                propertyAddress: "900 Huntington Avenue, Boston",
                date: "12-14-2020",
                time: "5pm",
                viewerId: "002",
                viewer: "Japher",
                landlord: "Jose",
                message: "I'm interested in renting your apartment."
            },
            {
                _id: "3",
                propertyId: "111",
                propertyAddress: "900 Huntington Avenue, Boston",
                date: "12-14-2020",
                time: "5pm",
                viewerId: "003",
                viewer: "Nic",
                landlord: "Jose",
                message: "I'm interested in renting your apartment."
            },
            {
                _id: "4",
                propertyId: "111",
                propertyAddress: "900 Huntington Avenue, Boston",
                date: "12-14-2020",
                time: "5pm",
                viewerId: "004",
                viewer: "Prajakta",
                landlord: "Jose",
                message: "I'm interested in renting your apartment."
            }
        ]

    };

    componentDidMount() {
        const userId = this.props.match.params.userId;
        const zpid = this.props.match.params.zpid;

        // if (userId === null || userId === undefined || userId === '') { //search appointments by property
        //     this.setState(() => {
        //         PropertyService.findFavouriteProperties(userId)
        //             .then(response => {
        //                 this.setState({
        //                                   properties: response
        //                               })
        //             });
        //     })
        // }
        //
        // if (zpid === null || zpid === undefined || zpid === '') { //search appointments by user
        //     this.setState(() => {
        //         PropertyService.findFavouriteProperties(userId)
        //             .then(response => {
        //                 this.setState({
        //                                   properties: response
        //                               })
        //             });
        //     })
        // }


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
