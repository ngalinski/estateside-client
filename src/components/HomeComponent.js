import React from 'react';
import './css/HomeComponent.css'
import PropertySearchComponent from "./PropertySearchComponent";
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";

export default class HomeComponent extends React.Component {
    state = {
        isLoggedIn: false,
        userProfile: null,
        searchProperty: "",
    };

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
    }

    render() {
        return (
            <div className="home-page-components">
                <TopNavigationComponent isLoggedIn={this.state.isLoggedIn}
                                        userProfile={this.state.userProfile}
                                        login={this.login}
                                        logout={this.logout}/>
                <h1>Estateside</h1>
                <p className="find-home-title">Find your new home.</p>
                <PropertySearchComponent searchProperty={this.state.searchProperty}/>
                <FooterComponent/>
            </div>
        )
    }
}
