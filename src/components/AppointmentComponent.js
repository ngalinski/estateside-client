import React from "react";
import "./css/AppointmentComponent.css"
import PropertyService from "../services/PropertyService";
import UserService from "../services/UserService";

export default class AppointmentComponent extends React.Component {

    state = {
        address: '',
        userFullName: ''
    }

    componentDidMount() {
        console.log(typeof (this.props.appointment.appointmentDate))
        PropertyService.findPropertyById(this.props.appointment.zpid)
            .then(property => {
                // if (this.state.address.full !== undefined) {
                    this.setState({
                                      address: property.address.full
                                  })
                // }
                // else {
                //     this.setState({
                //                       address: property.address
                //                   })
                // }
            })

        UserService.findUserById(this.props.appointment.userId)
            .then(user => {
                this.setState({
                                  userFullName: user.name
                              })
            })
    }

    render() {
        return (
            // create an appointment row
            <tr key={this.props.appointment._id} className="table-secondary">
                <td className="wbdv-appt-font-size">{this.state.address}</td>
                <td className="wbdv-appt-font-size">{this.state.userFullName}</td>
                <td className="wbdv-appt-font-size">{this.props.appointment.appointmentDate.substring(0, 10)}</td>
                <td className="wbdv-appt-font-size">{this.props.appointment.message}</td>
                <td className="d-none d-md-table-cell">
                    <i title="delete appointment" className="fa fa-times fa-pull-right wbdv-table-body-icon"
                       onClick={() => this.props.cancelAppointment(this.props.appointment.zpid, this.props.appointment.userId)}/>
                </td>
            </tr>
        )
    }
}

