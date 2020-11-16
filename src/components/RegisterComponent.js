import React from "react";

const RegisterComponent = () =>
    <div>
        <header id="main-header">
            <h1>Sign Up</h1>
        </header>

        <form>
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
                <label htmlFor="verify-password"
                       className="col-sm-3 col-form-label"> Password </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-password-verify"
                           id="verify-password" type="password" name="username"
                           placeholder="Re-enter password"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-3 col-form-label"/>
                <div className="col-sm-9">
                    <button className="btn btn-primary btn-block wbdv-button wbdv-register"
                            formAction="../profile/profile.template.client.html">Sign up
                    </button>
                    <div className="row">
                        <div className="col-6 wbdv-link wbdv-login">
                            <a href="../login/login.template.client.html">Login?</a>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    </div>;

export default RegisterComponent