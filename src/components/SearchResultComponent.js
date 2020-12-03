import React from 'react';
import MapComponent from "./MapComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import SearchPropertyNavigationComponent from "./SearchPropertyNavigationComponent";
import FooterComponent from "./FooterComponent";

const SearchResultComponent = ({
                                   state, login, logout, updateSelectedNavItem, toggleProfileUpdated,
                                   toggleContactRequested, updateContact
                               }) => {
    return (
        <div>
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
                                    toggleContactRequested={toggleContactRequested}
                                    updateContact={updateContact}
            />
            <SearchPropertyNavigationComponent state={state}
                                               login={login}
                                               logout={logout}
                                               updateSelectedNavItem={updateSelectedNavItem}
                                               toggleProfileUpdated={toggleProfileUpdated}
                                               toggleContactRequested={toggleContactRequested}
                                               updateContact={updateContact}
            />
            <br/>
            <MapComponent/>
            <FooterComponent/>
        </div>
    )
}

export default SearchResultComponent
