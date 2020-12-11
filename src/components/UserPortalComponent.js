import React from "react";
import TopNavigationComponent from "./TopNavigationComponent";
import PropertyService from "../services/PropertyService";
import PropertyGridComponent from "./PropertyGridComponent";
import UserPortalNavigationComponent from "./UserPortalNavigationComponent";

export default class UserPortal extends React.Component {
    state = {
        userId: '',
        properties: [{"address":"15 UNION ST BOSTON MA 02108","rental":{"zestimate":2400},"coordinates":[-71.057124,42.360735],"ownerName":["15 UNION ST LLC","HEARN, WILLIAM"],"ownerUsers":[],"interestedTenantUsers":[],"_id":"5fd39283256cc9c26ed7a2f7","zpid":189935381,"zestimate":null,"upper":null,"lower":null,"date":null,"zillowUrl":null,"url":"api.bridgedataoutput.com/api/v2/zestimates/zestimates/65681784","__v":0},
            {"rental":{"zestimate":2800},"coordinates":[-71.0591,42.3577],"ownerName":[],"ownerUsers":[],"interestedTenantUsers":[],"_id":"5fd392ad256cc9c26ed7a2fa","zpid":59187724,"zestimate":655050,"upper":796061,"lower":600002,"date":"2020-12-10T00:00:00.000Z","zillowUrl":"https://www.zillow.com/homedetails/59187724_zpid","url":"api.bridgedataoutput.com/api/v2/zestimates/zestimates/65772568","__v":0}],
        hits: 0,
        propertySearchPage: 1
    };

    componentDidMount() {
        if (this.props.state.userProfile.userId) {
            this.setState(prevState => ({
                userId: this.props.state.userProfile.userId
            }), () => {
                PropertyService.findFavouriteProperties(this.state.userId)
                    .then(response => {
                               // console.log(response)
                              this.setState(prevState => ({
                                  properties: response,
                                  hits: response.total
                              }))
                              console.log(this.state.properties)
                          }
                    )
            })
            console.log(this.state)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.userId !== this.props.match.params.userId) {
            this.setState(prevState => ({
                userId: this.props.match.params.userId
            }), () => {
                PropertyService.findFavouriteProperties(this.state.userId)
                    .then(response =>
                              this.setState(prevState => ({
                                  properties: response.bundle,
                                  hits: response.total
                              }))
                    )
            })
        }
    }

    handleNextClick = () => {
        PropertyService.findPropertiesForCity(this.state.location,
                                              (this.state.propertySearchPage)
                                              * 12)
            .then(response => {
                this.setState({
                                  properties: response.bundle,
                                  propertySearchPage: this.state.propertySearchPage + 1
                              });
                window.scrollTo(0, 0);
            });
    };

    handlePrevClick = () => {
        PropertyService.findPropertiesForCity(this.state.location,
                                              (this.state.propertySearchPage - 2)
                                              * 12)
            .then(response => {
                this.setState({
                                  properties: response.bundle,
                                  propertySearchPage: this.state.propertySearchPage - 1
                              });
                window.scrollTo(0, 0);
            });
    };


    render() {
        // return (
        //     <div>
        //         <TopNavigationComponent state={this.state}
        //                                 login={this.props.login}
        //                                 logout={this.props.logout}
        //                                 updateSelectedNavItem={this.props.updateSelectedNavItem}
        //                                 toggleProfileUpdated={this.props.toggleProfileUpdated}
        //                                 toggleContactRequested={this.props.toggleContactRequested}
        //                                 updateContact={this.props.updateContact}
        //         />
        //
        //         {/*<UserPortalNavigationComponent userId={this.props.state.userProfile.userId}*/}
        //         {/*                               state={this.state}/>*/}
        //
        //         {this.state.properties.length > 0 &&
        //          <PropertyGridComponent parentState={this.props.state}
        //                                 state={this.state}
        //                                 login={this.props.login}
        //                                 logout={this.props.logout}
        //                                 updateSelectedNavItem={this.props.updateSelectedNavItem}
        //                                 toggleProfileUpdated={this.props.toggleProfileUpdated}
        //                                 toggleContactRequested={this.props.toggleContactRequested}
        //                                 updateContact={this.props.updateContact}
        //                                 properties={this.state.properties}
        //                                 hits={this.state.hits}
        //                                 handleNextClick={this.handleNextClick}
        //                                 handlePrevClick={this.handlePrevClick}
        //                                 showOptions={false}
        //          />
        //         }
        //     </div>
        // )
        console.log(this.state.properties)
        console.log(this.state)
        return (

            <div>
                <TopNavigationComponent state={this.state}
                                        login={this.props.login}
                                        logout={this.props.logout}
                                        updateSelectedNavItem={this.props.updateSelectedNavItem}
                                        toggleProfileUpdated={this.props.toggleProfileUpdated}
                                        toggleContactRequested={this.props.toggleContactRequested}
                                        updateContact={this.props.updateContact}
                />


                <UserPortalNavigationComponent userId={this.state.userId}/>

                {this.props.match.params.userId && this.state.properties && this.state.properties.length > 0 &&
                 <PropertyGridComponent parentState={this.props.state}
                                        state={this.state}
                                        login={this.props.login}
                                        logout={this.props.logout}
                                        updateSelectedNavItem={this.props.updateSelectedNavItem}
                                        toggleProfileUpdated={this.props.toggleProfileUpdated}
                                        toggleContactRequested={this.props.toggleContactRequested}
                                        updateContact={this.props.updateContact}
                                        properties={this.state.properties}
                                        hits={this.state.hits}
                                        handleNextClick={this.handleNextClick}
                                        handlePrevClick={this.handlePrevClick}
                                        showOptions={false}
                 />
                }
            </div>
        )
    }
}
