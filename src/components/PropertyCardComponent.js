import React from "react";
import "./css/PropertyCardComponent.css"
import Modal from 'react-modal'
import {BookAppointmentComponent} from "./BookAppointmentComponent";
import DateUtil from "../util/DateUtil";
import IndividualPropertyDetailComponent from "./IndividualPropertyDetailComponent";
import PropertyService from "../services/PropertyService";
import {UpdateListingComponent} from "./UpdateListingComponent";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default class PropertyCardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            propertyDetailIsActive: false,
            isFavourite: false,
            countFavourite: 0
        }
    }

    toggleModal = () => {
        this.setState({
                          isActive: !this.state.isActive
                      })
    };

    toggleFavourite = () => {
        if (!this.state.isFavourite) { //fav a property
            PropertyService.createFavProperty(this.props.parentState.userProfile.userId,
                                              this.props.property.zpid)
                .then(r => this.setState({
                                             isFavourite: true,
                                             countFavourite: this.state.countFavourite + 1
                                         }))
        } else { //undo fav
            PropertyService.deleteFavProperty(this.props.parentState.userProfile.userId,
                                              this.props.property.zpid)
                .then(r => this.setState({
                                             isFavourite: false,
                                             countFavourite: this.state.countFavourite - 1
                                         }))
            //Re-render parent when marked un-favourite
            //https://stackoverflow.com/questions/53441584/how-to-re-render-parent-component-when-anything-changes-in-child-component/53441679
        }
    };

    togglePropertyDetailModal = () => {
        this.setState({
                          propertyDetailIsActive: !this.state.propertyDetailIsActive
                      })
    };

    componentWillMount() {
        PropertyService.isPropertyFavouritesForUser(this.props.parentState.userProfile.userId,
                                                    this.props.property.zpid)
            .then(res => {
                console.log(res.isFav)
                if (res.isFav === true) {
                    this.setState({
                                      isFavourite: res
                                  })
                }
            })

        PropertyService.countInterestedUsers(this.props.property.zpid)
            .then(res => {
                if (res.count !== 0) {
                    this.setState({
                                      countFavourite: res.count
                                  })
                }
            })

        Modal.setAppElement('body');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        let randomNum = Math.random() * 100;
        const imageUrl = `https://source.unsplash.com/collection/1896718/300x200/?sig=${randomNum}`
        // const imageUrl = "https://picsum.photos/300/200"; // use this if the other image url fails to load images
        return (
            // creating a property card
            <div className="col-sm-6 col-md-4 col-lg-3 wbdv-property-card">
                <div className="card h-100">
                    <img className="card-img-top" src={imageUrl}/>
                    <div className="card-body bg-primary">
                        {(this.props.property.zestimate || (this.props.property.rental
                                                            && this.props.property.rental.zestimate))
                         &&
                         <h2>${this.props.property.rental.zestimate
                               || this.props.property.zestimate}</h2>
                        }
                        <h4 className="card-title">
                            <a
                                onClick={this.togglePropertyDetailModal}
                                title="view the property"
                                className="wbdv-hyperlink">{this.props.property.address.full
                                                            !== undefined
                                                            && this.props.property.address.full}
                                {!this.props.property.address.full && this.props.property.address}
                            </a>
                        </h4>
                        <Modal isOpen={this.state.propertyDetailIsActive}
                               onRequestClose={this.togglePropertyDetailModal}
                               style={customStyles}>
                            <div className="container">
                                <IndividualPropertyDetailComponent
                                    property={this.props.property}/>
                                <button onClick={this.togglePropertyDetailModal}
                                        className="btn-primary btn btn-block">
                                    Back
                                </button>
                            </div>
                        </Modal>
                        {this.props.property.date &&
                         <p className="card-text text-white">
                             Available: {DateUtil.convertToDate(this.props.property.date)} <br/>
                         </p>
                        }
                    </div>

                    {/* card footer that displays option buttons */}
                    {this.props.showOptions &&
                     <div className="card-footer">
                         {/*delete a property as a landlord (on his own property list page)*/}
                         {
                             this.props.parentState.isLoggedIn &&
                             this.props.parentState.userProfile.role === 'landlord' &&
                             window.location.href.indexOf("portal") > -1 && // check if the current page is the landlord's property list
                             <i title="delete property"
                                className="fa fa-trash-alt wbdv-property-card-icon float-right"
                                onClick={() => this.props.deleteListing(this.props.property.zpid)}/>
                         }

                         {/*update a property as a landlord (on his own property list page)*/}
                         {
                             this.props.parentState.isLoggedIn &&
                             this.props.parentState.userProfile.role === 'landlord' &&
                             window.location.href.indexOf("portal") > -1 && // check if the current page is the landlord's property list
                             <div>
                                <i title="edit property"
                                   className="fa fa-pencil-alt wbdv-property-card-icon float-right"
                                   onClick={() => {this.toggleModal(); this.props.startEditingProperty(this.props.property);}}/>
                                 <Modal isOpen={this.state.isActive}
                                        onRequestClose={this.toggleModal}
                                        style={customStyles}>
                                     <div className="container">
                                         <UpdateListingComponent property={this.props.property}
                                                                 updateExistingProperty={this.props.updateExistingProperty}
                                                                 finishEditingProperty={this.props.finishEditingProperty}
                                                                 state={this.props.state}
                                                                 toggleModal={this.toggleModal}/>
                                         <button onClick={this.toggleModal}
                                                 className="btn-danger btn btn-block">
                                             Cancel
                                         </button>
                                     </div>
                                 </Modal>
                             </div>
                         }

                         {/*book appointment as a regular user*/}
                         {
                             this.props.parentState.isLoggedIn &&
                             this.props.parentState.userProfile.role !== 'landlord' &&
                             <div>
                                 <i title="book appointments"
                                    className="fa fa-address-book wbdv-property-card-icon float-right"
                                    onClick={this.toggleModal}/>
                                 <Modal isOpen={this.state.isActive}
                                        onRequestClose={this.toggleModal}
                                        style={customStyles}>
                                     <div className="container">
                                         <BookAppointmentComponent
                                             property={this.props.property}
                                             submitAppointment={this.props.submitAppointment}
                                             updateAppointmentDate={this.props.updateAppointmentDate}
                                             updateAppointmentMessage={this.props.updateAppointmentMessage}
                                         />
                                         <button onClick={this.toggleModal}
                                                 className="btn-primary btn btn-block">
                                             Cancel
                                         </button>
                                     </div>
                                 </Modal>
                             </div>
                         }

                         {/*see fav property info as a regular user*/}
                         {
                             this.props.parentState.isLoggedIn &&
                             this.props.parentState.userProfile.role !== 'landlord' &&
                             <span className="float-right">
                              <button className="align-content-sm-around small rounded-circle">
                                  {this.state.countFavourite}
                              </button>
                            {
                                this.state.isFavourite &&
                                <i className="fa fa-heart wbdv-fav-property-icon-active"
                                   onClick={this.toggleFavourite}/>
                            }
                              {
                                  !this.state.isFavourite &&
                                <i className="fa fa-heart wbdv-fav-property-icon-inactive"
                                   onClick={this.toggleFavourite}/>
                              }
                            </span>
                         }

                     </div>}

                </div>
            </div>
        )
    }
}
