import React from 'react';
import './css/HomeComponent.css'
import PropertySearchComponent from "./PropertySearchComponent";
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const HomeComponent = ({state, login, logout}) => {
    return (
        <div className="home-page-components">
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}/>
            <h1>Estateside</h1>
            <p className="find-home-title">Find your new home.</p>
            <PropertySearchComponent state={state}
                                     login={login}
                                     logout={logout}/>
            <FooterComponent/>
        </div>
    )
}

export default HomeComponent
