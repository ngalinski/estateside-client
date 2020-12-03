import React from 'react';
import '../components/css/HomeComponent.css'
import ProfileComponent from "../components/ProfileComponent";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import PrivacyPolicyComponent from "../components/PrivacyPolicyComponent";
import HelpComponent from "../components/HelpComponent";
import ContactComponent from "../components/ContactComponent";
import AboutComponent from "../components/AboutComponent";
import SearchResultComponent from "../components/SearchResultComponent";
import PropertyGridComponent from "../components/PropertyGridComponent";
import AppointmentListComponent from "../components/AppointmentListComponent";

export default class AppContainer extends React.Component {
    state = {
        isLoggedIn: false,
        userProfile: null,
        searchProperty: "",
        selectedNavItem: "Home",
        contact: {message: '', name: '', email: ''},
        profileUpdated: false,
        contactRequested: false
    };

    updateContact = (message, name, email) => this.setState(
        prevState => ({contact: {message: message, name: name, email: email}}))

    toggleProfileUpdated = (bool) => this.setState(prevState => ({
        profileUpdated: bool
    }))

    toggleContactRequested = (bool) => this.setState(prevState => ({contactRequested: bool}))

    updateUserProfile = (dob, phone) => {
        this.setState(prevState => (
            {
                userProfile: {...prevState.userProfile, phone: phone, dob: dob}
            }))
    }

    updateSelectedNavItem = (val) =>
        this.setState(prevState => ({
            isLoggedIn: prevState.isLoggedIn,
            userProfile: prevState.userProfile,
            searchProperty: prevState.searchProperty,
            selectedNavItem: val
        }));

    login = (userData) => {
        localStorage.setItem("userProfile", JSON.stringify(userData.user))
        this.setState({
                          isLoggedIn: true,
                          userProfile: userData.user,
                      });
    };

    logout = () => {
        this.setState({
                          isLoggedIn: false,
                          userProfile: null,
                      });
        localStorage.removeItem("userProfile")
    };

    componentDidMount() {
        let userProfile = localStorage.getItem("userProfile")
        let userData = JSON.parse(localStorage.getItem("userProfile"))
        if (userProfile) {
            this.setState({
                              isLoggedIn: true,
                              userProfile: userData
                          })
        }
        if (window.location.pathname.includes("/profile")) {
            this.setState({})
        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path={["/", "/login", "/logout"]} exact>
                        <HomeComponent state={this.state}
                                       login={this.login}
                                       logout={this.logout}
                                       updateSelectedNavItem={this.updateSelectedNavItem}
                                       toggleProfileUpdated={this.toggleProfileUpdated}
                                       toggleContactRequested={this.toggleContactRequested}
                        />
                    </Route>
                    {/*<Route path="/register" exact component={RegisterComponent}/>*/}
                    <Route path="/profile" exact>
                        <ProfileComponent state={this.state}
                                          login={this.login}
                                          logout={this.logout}
                                          updateSelectedNavItem={this.updateSelectedNavItem}
                                          updateUserProfile={this.updateUserProfile}
                                          toggleProfileUpdated={this.toggleProfileUpdated}
                                          toggleContactRequested={this.toggleContactRequested}
                        />
                    </Route>
                    <Route path="/privacy" exact>
                        <PrivacyPolicyComponent state={this.state}
                                                login={this.login}
                                                logout={this.logout}
                                                updateSelectedNavItem={this.updateSelectedNavItem}
                                                toggleProfileUpdated={this.toggleProfileUpdated}
                                                toggleContactRequested={this.toggleContactRequested}
                        />
                    </Route>
                    <Route path="/help" exact>
                        <HelpComponent state={this.state}
                                       login={this.login}
                                       logout={this.logout}
                                       updateSelectedNavItem={this.updateSelectedNavItem}
                                       toggleProfileUpdated={this.toggleProfileUpdated}
                                       toggleContactRequested={this.toggleContactRequested}
                        />
                    </Route>
                    <Route path="/contact" exact>
                        <ContactComponent state={this.state}
                                          login={this.login}
                                          logout={this.logout}
                                          updateSelectedNavItem={this.updateSelectedNavItem}
                                          toggleProfileUpdated={this.toggleProfileUpdated}
                                          updateContact={this.updateContact}
                                          toggleContactRequested={this.toggleContactRequested}
                        />
                    </Route>
                    <Route path="/about" exact>
                        <AboutComponent state={this.state}
                                        login={this.login}
                                        logout={this.logout}
                                        updateSelectedNavItem={this.updateSelectedNavItem}
                                        toggleProfileUpdated={this.toggleProfileUpdated}
                                        toggleContactRequested={this.toggleContactRequested}
                        />
                    </Route>
                    <Route path="/search" exact>
                        <SearchResultComponent state={this.state}
                                               login={this.login}
                                               logout={this.logout}
                                               updateSelectedNavItem={this.updateSelectedNavItem}
                                               toggleProfileUpdated={this.toggleProfileUpdated}
                                               toggleContactRequested={this.toggleContactRequested}
                        />
                    </Route>
                    <Route path="/properties" exact>
                        <PropertyGridComponent state={this.state}
                                               login={this.login}
                                               logout={this.logout}
                                               updateSelectedNavItem={this.updateSelectedNavItem}
                                               toggleProfileUpdated={this.toggleProfileUpdated}
                                               toggleContactRequested={this.toggleContactRequested}
                        />
                    </Route>
                    <Route path={["/properties/:propertyId/appointments",
                                  "/users/:userId/appointments"]} exact>
                        <AppointmentListComponent state={this.state}
                                                  login={this.login}
                                                  logout={this.logout}
                                                  updateSelectedNavItem={this.updateSelectedNavItem}
                                                  toggleProfileUpdated={this.toggleProfileUpdated}
                                                  toggleContactRequested={this.toggleContactRequested}
                        />
                    </Route>
                </BrowserRouter>
            </div>
        )
    }
}
