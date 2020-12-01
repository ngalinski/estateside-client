import React from "react";
import "./css/AppointmentComponent.css"

const AppointmentComponent = ({appointment}) => {
    return (
        // create an appointment row
        <tr key={appointment._id} className="table-primary">
            <td>{appointment.propertyAddress}</td>
            <td className="d-none d-sm-table-cell">{appointment.viewer}</td>
            <td>{appointment.date} {appointment.time}</td>
            <td className="d-none d-md-table-cell">
                <i title="delete appointment" className="fa fa-trash fa-pull-right wbdv-table-body-icon"></i>
            </td>
        </tr>
    )
}

export default AppointmentComponent;
