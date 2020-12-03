import React from 'react';
import MapComponent from "./MapComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import SearchPropertyNavigationComponent from "./SearchPropertyNavigationComponent";
import FooterComponent from "./FooterComponent";

const SearchResultComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated, toggleContactRequested}) => {
    return (
        <div>
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
                                    toggleContactRequested={toggleContactRequested}
            />
            <SearchPropertyNavigationComponent state={state}
                                               login={login}
                                               logout={logout}
                                               updateSelectedNavItem={updateSelectedNavItem}
                                               toggleProfileUpdated={toggleProfileUpdated}
                                               toggleContactRequested={toggleContactRequested}
            />
            <br/>
            <MapComponent/>
            <FooterComponent/>
        </div>
    )
}

export default SearchResultComponent
