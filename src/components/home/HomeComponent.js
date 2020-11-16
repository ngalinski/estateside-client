import React from 'react';
import './css/HomeComponent.css'
import PropertySearchComponent from "../PropertySearchComponent";
import FooterComponent from "../FooterComponent";
import TopNavigationComponent from "../TopNavigationComponent";

export default class HomeComponent extends React.Component {

    render() {
        return(
            <div>
                <TopNavigationComponent/>

                <header id="header">
                    <h1>Estateside</h1>
                    <p>Find your new home.</p>
                </header>

                <PropertySearchComponent/>
                <FooterComponent/>
            </div>
        )
    }

}