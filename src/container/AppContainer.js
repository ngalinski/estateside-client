import React from 'react';
import '../components/css/HomeComponent.css'
import RegisterComponent from "../components/RegisterComponent";
import LoginComponent from "../components/LoginComponent";
import ProfileComponent from "../components/ProfileComponent";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import PrivacyPolicyComponent from "../components/PrivacyPolicyComponent";
import HelpComponent from "../components/HelpComponent";

export default class AppContainer extends React.Component {

    state = {
        isLoggedIn: false,
        userProfile: null,
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={HomeComponent}/>
                    <Route path="/register" exact component={RegisterComponent}/>
                    <Route path="/login" exact component={LoginComponent}/>
                    <Route path="/profile" exact component={ProfileComponent}/>
                    <Route path="/privacy" exact component={PrivacyPolicyComponent}/>
                    <Route path="/help" exact component={HelpComponent}/>
                </BrowserRouter>
            </div>
        )
    }
}
