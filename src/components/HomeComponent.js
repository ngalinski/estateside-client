import React from 'react';
import './css/HomeComponent.css'
import PropertySearchComponent from "./PropertySearchComponent";
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const HomeComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated}) => {
    return (
        <div className="home-page-components">
            <div className="home-page-top">
                <TopNavigationComponent state={state}
                                        login={login}
                                        logout={logout}
                                        updateSelectedNavItem={updateSelectedNavItem}
                                        toggleProfileUpdated={toggleProfileUpdated}
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
                />
            </div>
        </div>
    )
}

export default HomeComponent
