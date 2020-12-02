import React from "react";
import TopNavigationComponent from "./TopNavigationComponent";
import FooterComponent from "./FooterComponent";
import AppointmentComponent from "./AppointmentComponent";
import "./css/AppointmentListComponent.css"

const dummyAppointmentData = [
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

const AppointmentListComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated}) => {
    return (
        <div>
            <div className="contact-top-bar">
                <TopNavigationComponent state={state}
                                        login={login}
                                        logout={logout}
                                        updateSelectedNavItem={updateSelectedNavItem}
                                        toggleProfileUpdated={toggleProfileUpdated}
                />
            </div>
            <div>
                <header>
                    <h1>Appointment List</h1>
                </header>

                <div className="container">
                    <table className="table">
                        <thead className="text-white">
                        <tr>
                            <th>
                                <i className="fa fa-map-pin wbdv-table-header-icon"></i>
                                Property Address
                            </th>
                            <th className="d-none d-sm-table-cell">
                                <i className="fa fa-users wbdv-table-header-icon"></i>
                                Viewer
                            </th>
                            <th>
                                <i className="fa fa-calendar-plus wbdv-table-header-icon"></i>
                                Appointment Date
                            </th>
                            <th className="d-none d-md-table-cell wbdv-col-width"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            dummyAppointmentData.map(appointment =>
                                                         <AppointmentComponent
                                                             appointment={appointment}
                                                         />)
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            <FooterComponent/>
        </div>
    )
}

export default AppointmentListComponent;


