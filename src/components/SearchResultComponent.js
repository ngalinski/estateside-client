import React from 'react';
import MapComponent from "./MapComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import SearchPropertyNavigationComponent from "./SearchPropertyNavigationComponent";

export default class SearchResultComponent extends React.Component {
    render() {
        return (
            <div>
                <TopNavigationComponent/>
                <SearchPropertyNavigationComponent/>
                <br/>
                <MapComponent/>
            </div>
        )
    }
}
