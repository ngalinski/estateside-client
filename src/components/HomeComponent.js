import React from 'react';
import './css/HomeComponent.css'
import PropertySearchComponent from "./PropertySearchComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const HomeComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated, toggleContactRequested, updateContact}) => {
    return (
        <div className="home-page-components">
            <div className="home-page-top">
                <TopNavigationComponent state={state}
                                        login={login}
                                        logout={logout}
                                        updateSelectedNavItem={updateSelectedNavItem}
                                        toggleProfileUpdated={toggleProfileUpdated}
                                        toggleContactRequested={toggleContactRequested}
                                        updateContact={updateContact}
                />
                <header id="home-header"><h1>Estateside</h1></header>
                <p className="find-home-title">Find your new home.</p>
            </div>
            <div className="home-page-search">
                <PropertySearchComponent state={state}
                                         login={login}
                                         logout={logout}
                                         updateSelectedNavItem={updateSelectedNavItem}
                                         toggleProfileUpdated={toggleProfileUpdated}
                                         toggleContactRequested={toggleContactRequested}
                                         updateContact={updateContact}
                />
            </div>
        </div>
    )
}

export default HomeComponent
