import React from 'react';
import './topNavigatation.css'
import {BrowserRouter, Link, Route} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import ProfileComponent from "./ProfileComponent";

export default class topNavigationComponent extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="topnav">
                    <ul className="icons">
                        <li><a className="active" href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li>
                            <Link to="/register" className="icon solid fa-user-plus"/>
                            <Route path="/register" exact component={RegisterComponent}/>
                        </li>

                        <li>
                            <Link to="/login" className="icon solid fa-sign-in-alt"/>
                            <Route path="/login" exact component={LoginComponent}/>
                        </li>

                        <li>
                            <Link to="/profile" className="icon solid fas fa-user"/>
                            <Route path="/profile" exact component={ProfileComponent}/>
                        </li>

                        <li><a href="privacy-policy/privacy-policy.html" class="icon solid fa-info-circle" title="privacy policy"><span class="label">Privacy Policy</span></a></li>
                        <li><a href="help/help.html" class="icon solid fa-question"><span class="label">Help</span></a></li>
                    </ul>
                </div>
            </BrowserRouter>
        )
    }
}

