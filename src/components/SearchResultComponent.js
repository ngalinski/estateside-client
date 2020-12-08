import React from 'react';
import PropertyGridComponent from "./PropertyGridComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";

export default class SearchResultComponent extends React.Component {
    state = {
        location: '',
        properties: []
    }

    componentDidMount() {
        console.log(this.props);
        const location = this.props.location;
        let properties = [];
        if (location) {
            properties =
                PropertyService.findPropertiesForCity(location, this.state.propertySearchPage * 10);
        }
        this.setState({
                          location: location,
                          properties: properties
                      })
    }

    render() {

        return (
            <div>
                <div className="home-page-top">
                    <TopNavigationComponent state={this.props.state}
                                            login={this.props.login}
                                            logout={this.props.logout}
                                            updateSelectedNavItem={this.props.updateSelectedNavItem}
                                            toggleProfileUpdated={this.props.toggleProfileUpdated}
                                            toggleContactRequested={this.props.toggleContactRequested}
                                            updateContact={this.props.updateContact}
                    />
                </div>
                <PropertyGridComponent state={this.props.state}
                                       login={this.props.login}
                                       logout={this.props.logout}
                                       updateSelectedNavItem={this.props.updateSelectedNavItem}
                                       toggleProfileUpdated={this.props.toggleProfileUpdated}
                                       toggleContactRequested={this.props.toggleContactRequested}
                                       updateContact={this.props.updateContact}/>
                <br/>
            </div>
        )
    }
}
