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
import AppointmentListComponent from "../components/AppointmentListComponent";
import DateUtil from "../util/DateUtil";
export default class AppContainer extends React.Component {
    state = {
        isLoggedIn: false,
        userProfile: {},
        searchProperty: "",
        selectedNavItem: "Home",
        contact: {message: '', name: '', email: ''},
        profileUpdated: false,
        contactRequested: false,
        searchLocation: "",
        propertySearchPage: 0,
        location: '',
        properties: []
    };

    updateSearchLocation = (location) => {
        this.setState({searchLocation: location})
    }

    updateContact = (message, name, email) => this.setState(
        prevState => ({contact: {message: message, name: name, email: email}}))

    toggleProfileUpdated = (bool) => this.setState(prevState => ({
        profileUpdated: bool
    }))

    toggleContactRequested = (bool) => this.setState(prevState => ({contactRequested: bool}))

    updateUserProfile = (dob, phone, addrLine1, addrLine2, city, state, zipcode) => {
        this.setState(prevState => (
            {
                userProfile: {
                    ...prevState.userProfile,
                    phone: phone,
                    dob: dob,
                    addrLine1: addrLine1,
                    addrLine2: addrLine2,
                    city: city,
                    state: state,
                    zipcode: zipcode
                }
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

    navHelper() {
        let path = window.location.pathname;
        if (path.includes("home")) {
            this.setState({selectedNavItem: "Home"})
        } else if (path.includes("about")) {
            this.setState({selectedNavItem: "About"})
        } else if (path.includes("contact")) {
            this.setState({selectedNavItem: "Contact"})
        } else if (path.includes("profile")) {
            this.setState({selectedNavItem: "Profile"})
        } else if (path.includes("privacy")) {
            this.setState({selectedNavItem: "Privacy"})
        } else if (path.includes("help")) {
            this.setState({selectedNavItem: "Help"})
        }
    }

    componentDidMount() {
        let userProfile = localStorage.getItem("userProfile")
        let userData = JSON.parse(localStorage.getItem("userProfile"))
        this.navHelper();
        if (userProfile) {
            this.setState({
                              isLoggedIn: true,
                              userProfile: userData
                          })
        }
    }

    /*

        componentWillMount() {
            onbeforeunload = e => "Don't leave me"
        }

        componentWillUnmount() {
            onbeforeunload = null
        }
    */

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
                                       updateContact={this.updateContact}
                                       updateSearchLocation={this.updateSearchLocation}
                        />
                    </Route>
                    <Route path="/profile" exact>
                        <ProfileComponent state={this.state}
                                          login={this.login}
                                          logout={this.logout}
                                          updateSelectedNavItem={this.updateSelectedNavItem}
                                          updateUserProfile={this.updateUserProfile}
                                          toggleProfileUpdated={this.toggleProfileUpdated}
                                          toggleContactRequested={this.toggleContactRequested}
                                          updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path="/privacy" exact>
                        <PrivacyPolicyComponent state={this.state}
                                                login={this.login}
                                                logout={this.logout}
                                                updateSelectedNavItem={this.updateSelectedNavItem}
                                                toggleProfileUpdated={this.toggleProfileUpdated}
                                                toggleContactRequested={this.toggleContactRequested}
                                                updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path="/help" exact>
                        <HelpComponent state={this.state}
                                       login={this.login}
                                       logout={this.logout}
                                       updateSelectedNavItem={this.updateSelectedNavItem}
                                       toggleProfileUpdated={this.toggleProfileUpdated}
                                       toggleContactRequested={this.toggleContactRequested}
                                       updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path="/contact" exact>
                        <ContactComponent state={this.state}
                                          login={this.login}
                                          logout={this.logout}
                                          updateSelectedNavItem={this.updateSelectedNavItem}
                                          toggleProfileUpdated={this.toggleProfileUpdated}
                                          toggleContactRequested={this.toggleContactRequested}
                                          updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path="/about" exact>
                        <AboutComponent state={this.state}
                                        login={this.login}
                                        logout={this.logout}
                                        updateSelectedNavItem={this.updateSelectedNavItem}
                                        toggleProfileUpdated={this.toggleProfileUpdated}
                                        toggleContactRequested={this.toggleContactRequested}
                                        updateContact={this.updateContact}
                        />
                    </Route>
                    <Route path="/search/:location" exact render={(props) => (
                        <SearchResultComponent state={this.state}
                                               login={this.login}
                                               logout={this.logout}
                                               updateSelectedNavItem={this.updateSelectedNavItem}
                                               toggleProfileUpdated={this.toggleProfileUpdated}
                                               toggleContactRequested={this.toggleContactRequested}
                                               updateContact={this.updateContact}
                                               updateSearchLocation={this.updateSearchLocation}
                                               {...props}
                        />
                    )}>
                    </Route>
                    <Route path={["/properties/:propertyId/appointments",
                                  "/users/:userId/appointments"]} exact>
                        <AppointmentListComponent state={this.state}
                                                  login={this.login}
                                                  logout={this.logout}
                                                  updateSelectedNavItem={this.updateSelectedNavItem}
                                                  toggleProfileUpdated={this.toggleProfileUpdated}
                                                  toggleContactRequested={this.toggleContactRequested}
                                                  updateContact={this.updateContact}
                        />
                    </Route>
                </BrowserRouter>
            </div>
        )
    }
}
