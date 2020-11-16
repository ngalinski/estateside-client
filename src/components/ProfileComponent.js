import React from "react";

const ProfileComponent = () =>
    <div>
        <header id="main-header">
            <h1>Profile</h1>
        </header>

        <div className="form-group">
            <label className="col-sm-3 wbdv-message"> Profile successfully saved! </label>
        </div>
        <form>

            <div className="form-group row">
                <label htmlFor="username" className="col-sm-3 col-form-label"> Username </label>
                <div className="col-sm-9">
                    <input readOnly="readonly" className="form-control wbdv-field wbdv-username"
                           id="username" type="text" name="password" placeholder="Your username"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="phone" className="col-sm-3 col-form-label"> Phone </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-phone"
                           id="phone" type="number" name="phone" placeholder="(617)-123-1234"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="email" className="col-sm-3 col-form-label"> Email </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-email"
                           id="email" type="email" name="email" placeholder="xyz@northeastern.edu"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="role" className="col-sm-3 col-form-label"> Role </label>
                <div className="col-sm-9">
                    <select name="role" id="role" className="wbdv-field wbdv-role form-control">
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="dob" className="col-sm-3 col-form-label"> Date of Birth </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-dob"
                           id="dob" type="date" name="dateOfBirth"/>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-3"/>
                <div className="col-sm-9">
                    <button id="updateBtn" className="btn btn-success btn-block wbdv-update"
                            formAction="#">Update
                    </button>
                </div>
            </div>

            <div className="form-group row ">
                <div className="col-sm-3"/>
                <div className="col-sm-9">
                    <button id="logoutBtn" className="btn btn-danger btn-block wbdv-logout"
                            formAction="../index.html">
                        Log Out
                    </button>
                </div>
            </div>

        </form>
    </div>;

export default ProfileComponent