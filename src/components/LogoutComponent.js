import React from "react";
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

const LogoutComponent = ({logout}) =>
    <Tooltip title="Logout">
        <Link to="/" onClick={() => {
            logout()
        }} className="icon solid fa-sign-out-alt"/>
    </Tooltip>
export default LogoutComponent
