import React from 'react';
import MapComponent from "./MapComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import SearchPropertyNavigationComponent from "./SearchPropertyNavigationComponent";
import FooterComponent from "./FooterComponent";

const SearchResultComponent = ({state, login, logout}) => {
    return (
        <div>
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}/>
            <SearchPropertyNavigationComponent state={state}
                                               login={login}
                                               logout={logout}/>
            <br/>
            <MapComponent/>
            <FooterComponent/>
        </div>
    )
}

export default SearchResultComponent
