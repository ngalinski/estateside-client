import React from 'react';
import PropertyGridComponent from "./PropertyGridComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";

export default class SearchResultComponent extends React.Component {
    state = {
        location: '',
        properties: [],
        hits: 0
    }

    componentDidMount() {
        const location = this.props.match.params.location;
        this.setState({location: location})
        if (location) {
            PropertyService.findPropertiesForCity(location,
                                                  (this.props.state.propertySearchPage - 1)
                                                  * 10)
                .then(response => {
                    this.setState({
                                      properties: response.bundle,
                                      hits: response.total
                                  })
                });
        }
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
                                       updateContact={this.props.updateContact}
                                       properties={this.state.properties}
                                       hits={this.state.hits}/>
                <br/>
            </div>
        )
    }
}
