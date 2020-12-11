import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";

export default class UserPortalNavigationComponent extends React.Component {
    render() {
        return (
            <div className="topnav">
                <ul className="icons">
                    <li>
                        <Tooltip title="Your hosted properties">
                            <Link to={`/user/portal/${this.props.userId}/properties`}>
                                Favourite Properties</Link>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Your viewing appointments">
                            <Link to={`/user/portal/${this.props.userId}/appointments`}>
                                Your viewing appointments</Link>
                        </Tooltip>
                    </li>
                </ul>
            </div>
        )
    }
}
