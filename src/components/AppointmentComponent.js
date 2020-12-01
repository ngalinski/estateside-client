import React from "react";


const AppointmentComponent = ({appointment}) => {
    return (
        // create an appointment row
        <tr key={appointment._id} className="table-primary">
            <td>{appointment.propertyAddress}</td>
            <td className="d-none d-sm-table-cell">{appointment.viewer}</td>
            <td className="d-none d-md-table-cell">{appointment.date} {appointment.time}</td>
            <td>
                <span className="pull-right">
                    <i title="delete appointment" className="fa fa-trash"></i>
                </span>
            </td>
        </tr>
    )
}

export default AppointmentComponent;
