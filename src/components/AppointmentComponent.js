import React from "react";
import "./css/AppointmentComponent.css"

const AppointmentComponent = ({appointment}) => {
    return (
        // create an appointment row
        <tr key={appointment._id} className="table-secondary">
            <td className="wbdv-appt-font-size">{appointment.zpid}</td>
            <td className="wbdv-appt-font-size">{appointment.userId}</td>
            <td className="wbdv-appt-font-size">{appointment.appointmentDate}</td>
            <td className="wbdv-appt-font-size">{appointment.message}</td>
            <td className="d-none d-md-table-cell">
                <i title="delete appointment" className="fa fa-times fa-pull-right wbdv-table-body-icon"/>
            </td>
        </tr>
    )
}

export default AppointmentComponent;
