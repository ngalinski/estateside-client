import React from "react";
import "./css/AppointmentComponent.css"

const AppointmentComponent = ({appointment}) => {
    return (
        // create an appointment row
        <tr key={appointment._id} className="table-secondary">
            <td className="wbdv-appt-font-size">{appointment.propertyAddress}</td>
            <td className="wbdv-appt-font-size">{appointment.viewer}</td>
            <td className="wbdv-appt-font-size">{appointment.date} {appointment.time}</td>
            <td className="d-none d-md-table-cell">
                <i title="delete appointment" className="fa fa-times fa-pull-right wbdv-table-body-icon"/>
            </td>
        </tr>
    )
}

export default AppointmentComponent;
