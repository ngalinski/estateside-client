import React from "react";
import {Link} from "react-router-dom";
import "./css/PropertyCardComponent.css"
import Modal from 'react-modal'
import {BookAppointmentComponent} from "./BookAppointmentComponent";
import DateUtil from "../util/DateUtil";
import IndividualPropertyDetailComponent from "./IndividualPropertyDetailComponent";

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
        super(props)

        this.state = {
            isActive: false,
            propertyDetailIsActive: false
        }
    }

    toggleModal = () => {
        this.setState({
                          isActive: !this.state.isActive
                      })
    };

    togglePropertyDetailModal = () => {
        this.setState({
                          propertyDetailIsActive: !this.state.propertyDetailIsActive
                      })
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render() {
        const imageUrl = "https://picsum.photos/300/200";
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
                                className="wbdv-hyperlink">{this.props.property.address}
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
                    {this.props.showOptions &&
                     <div className="card-footer">
                         {this.props.parentState.isLoggedIn
                          && this.props.parentState.userProfile.role === 'landlord' &&
                          <i title="delete property"
                             className="fa fa-trash-alt wbdv-property-card-icon float-right"/>
                         }
                         {
                             this.props.parentState.isLoggedIn &&
                             <i title="manage appointments"
                                className="fa fa-address-book wbdv-property-card-icon float-right"
                                onClick={this.toggleModal}>
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
                             </i>
                         }
                         {this.props.parentState.isLoggedIn &&
                          <span className="float-right">
                            {/*show/hide one of the heart icons below depending on the data of the property (fav vs not fav)*/}
                              <i className="fa fa-heart wbdv-fav-property-icon-active"/>
                              {/*<i className="fa fa-heart wbdv-fav-property-icon-inactive"></i>*/}
                        </span>}

                     </div>}

                </div>
            </div>
        )
    }
}
