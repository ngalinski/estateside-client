import React from 'react';
import PropertyGridComponent from "./PropertyGridComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const SearchResultComponent = ({
                                   state, login, logout, updateSelectedNavItem, toggleProfileUpdated,
                                   toggleContactRequested, updateContact, updateSearchLocation
                               }) => {
    return (
        <div>
            <div className="home-page-top">
                <TopNavigationComponent state={state}
                                        login={login}
                                        logout={logout}
                                        updateSelectedNavItem={updateSelectedNavItem}
                                        toggleProfileUpdated={toggleProfileUpdated}
                                        toggleContactRequested={toggleContactRequested}
                                        updateContact={updateContact}
                />
            </div>
            <PropertyGridComponent state={state}
                                   login={login}
                                   logout={logout}
                                   updateSelectedNavItem={updateSelectedNavItem}
                                   toggleProfileUpdated={toggleProfileUpdated}
                                   toggleContactRequested={toggleContactRequested}
                                   updateContact={updateContact}/>
            <br/>
        </div>
    )
}

export default SearchResultComponent
