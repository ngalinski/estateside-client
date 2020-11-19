import React from "react";
import {Link} from "react-router-dom";

const LogoutComponent = ({logout}) =>
    <Link to="/" onClick={() => {
        logout()
    }} className="icon solid fa-sign-out-alt"/>

export default LogoutComponent
