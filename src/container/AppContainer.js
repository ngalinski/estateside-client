import React from 'react';
import '../components/css/HomeComponent.css'
import RegisterComponent from "../components/RegisterComponent";
import ProfileComponent from "../components/ProfileComponent";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import PrivacyPolicyComponent from "../components/PrivacyPolicyComponent";
import HelpComponent from "../components/HelpComponent";
import ContactComponent from "../components/ContactComponent";
import AboutComponent from "../components/AboutComponent";
import SearchResultComponent from "../components/SearchResultComponent";
import PropertyGridComponent from "../components/PropertyGridComponent";
import MapComponent from "../components/MapComponent";
// import NewPropertyComponent from "../components/NewPropertyComponent";

export default class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path={["/", "/login", "/logout"]} exact component={HomeComponent}/>
                    <Route path="/register" exact component={RegisterComponent}/>
                    <Route path="/profile" exact component={ProfileComponent}/>
                    <Route path="/privacy" exact component={PrivacyPolicyComponent}/>
                    <Route path="/help" exact component={HelpComponent}/>
                    <Route path="/contact" exact component={ContactComponent}/>
                    <Route path="/about" exact component={AboutComponent}/>
                    <Route path="/search" exact component={SearchResultComponent}/>
                    <Route path="/properties" exact component={PropertyGridComponent}/>
                </BrowserRouter>
            </div>
        )
    }
}
