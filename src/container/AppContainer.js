import React from 'react';
import '../components/css/HomeComponent.css'
import RegisterComponent from "../components/RegisterComponent";
import ProfileComponent from "../components/ProfileComponent";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "../components/HomeComponent";

export default class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path={["/", "/login", "/logout"]} exact component={HomeComponent}/>
                    <Route path="/register" exact component={RegisterComponent}/>
                    <Route path="/profile" exact component={ProfileComponent}/>
                </BrowserRouter>
            </div>
        )
    }
}
