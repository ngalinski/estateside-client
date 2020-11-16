import React from "react";
import {Link} from "react-router-dom";

const LoginComponent = () =>
    <div>
        <div className="form-group row">
            <label htmlFor="username" className="col-sm-3 col-form-label"> Username </label>
            <div className="col-sm-9">
                <input className="form-control wbdv-field wbdv-username"
                       id="username" type="text" name="username" placeholder="Enter username"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label"> Password </label>
            <div className="col-sm-9">
                <input className="form-control wbdv-field wbdv-password"
                       id="password" type="password" name="username"
                       placeholder="Enter password"/>
            </div>
        </div>

        <div className="form-group row">
            <label className="col-sm-3 col-form-label"/>
            <div className="col-sm-9">
                <button className="btn btn-primary wbdv-button btn-block wbdv-login"
                        formAction="../profile/profile.template.client.html">Sign in
                </button>
                <div className="row">
                    <div className="col-6 wbdv-link wbdv-forgot-password">
                        <Link to="/">Forgot Password?</Link>
                    </div>
                    <div className="col-6 wbdv-link wbdv-register">
                        <Link to="/register"
                              className="float-right">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default LoginComponent
