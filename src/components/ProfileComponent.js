import React from "react";
import TopNavigationComponent from "./TopNavigationComponent";
import './css/ProfileComponent.css'
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

const convertToDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month.toString().length === 1) {
        month = `0${month.toString()}`;
    }
    let day = date.getDate() + 1;
    if (day.toString().length === 1) {
        day = `0${day.toString()}`;
    }
    return year + '-' + month + '-' + day;
}

const ProfileComponent = ({state, login, logout, updateSelectedNavItem, updateUserProfile, toggleProfileUpdated}) =>
    <div>
        <TopNavigationComponent state={state}
                                login={login}
                                logout={logout}
                                updateSelectedNavItem={updateSelectedNavItem}
                                toggleProfileUpdated={toggleProfileUpdated}
        />
        <header id="main-header">
            <h1>Profile</h1>
        </header>

        <div className="container">
            <div className={`${!state.profileUpdated ? "hidden"
                                                     : ""} form-group`}>
                <label className="col-sm-3 wbdv-message"> Profile successfully saved! </label>
            </div>
            {
                state && state.userProfile && state.userProfile.profilePic &&
                <div className="profilePicture">
                    <img src={state.userProfile.profilePic}/>
                </div>
            }
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-3 col-form-label"> Email </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-email"
                           id="email" type="email" name="email" placeholder="xyz@northeastern.edu"
                           value={state && state.userProfile ? state.userProfile.email : ''}
                           readOnly/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="phone" className="col-sm-3 col-form-label"> Phone </label>
                <div className="col-sm-9">
                    <input className="form-control wbdv-field wbdv-phone"
                           value={state.userProfile.phone}
                           id="phone" type="text" name="phone" placeholder="(617)-123-1234"
                           onChange={(event) => {
                               updateUserProfile(state.userProfile.dob, event.target.value);
                           }}/>
                </div>
            </div>


            <div className="form-group row">
                <label htmlFor="dob" className="col-sm-3 col-form-label"> Date of Birth </label>
                <div className="col-sm-9">
                    <input className="form-control"
                           id="dob" type="date" name="dateOfBirth"
                           value={convertToDate(state.userProfile.dob)}
                           onChange={(event) => {
                               updateUserProfile(event.target.value, state.userProfile.phone)
                           }}/>
                </div>
            </div>

            <div className="form-group row update-row">
                <div className="col-sm-3"/>
                <div className="col-sm-9">
                    <button id="updateBtn" className="btn btn-success btn-block wbdv-update"
                            onClick={() => {
                                UserService.updateUser(state.userProfile.userId,
                                                       state.userProfile);
                                toggleProfileUpdated(true);
                            }}>Update
                    </button>
                </div>
            </div>

            <div className="form-group row logout-row">
                <div className="col-sm-3"/>
                <div className="col-sm-9">
                    <Link to="/">
                        <button id="logoutBtn" className="btn btn-danger btn-block wbdv-logout">
                            Cancel
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>;

export default ProfileComponent
