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

    render() {
        return (
            <div>
                <TopNavigationComponent isLoggedIn={this.state.isLoggedIn}
                                        userProfile={this.state.userProfile}/>
                <h1>Estateside</h1>
                <p>Find your new home.</p>
                <PropertySearchComponent searchProperty={this.state.searchProperty}/>
                <FooterComponent/>
            </div>
        )
    }
}
