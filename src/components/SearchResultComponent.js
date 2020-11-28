import React from 'react';
import MapComponent from "./MapComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import {Link} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import {PropertyTopNavigationComponent} from "./PropertyTopNavigation";

export default class SearchResultComponent extends React.Component {

    render() {
        return (
            <div>
                <TopNavigationComponent/>
                <PropertyTopNavigationComponent/>

                <br/>

                <MapComponent/>
            </div>
        )
    }
}
