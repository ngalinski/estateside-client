import React from "react";
import {Link} from "react-router-dom";
import "./css/PropertyCardComponent.css"
import Modal from 'react-modal'
import {BookAppointmentComponent} from "./BookAppointmentComponent";
import DateUtil from "../util/DateUtil";
import {IndividualPropertyDetailComponent} from "./IndividualPropertyDetailComponent";

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

        // this.propertyDetailState = {
        //     isActive: false
        // }
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

    //
    // togglePropertyDetailModal = () => {
    //     this.propertyDetailState =
    //         {isActive: !this.propertyDetailState.isActive}
    // };

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
                        {(this.props.zestimate || (this.props.rental
                                                   && this.props.rental.zestimate)) &&
                         <h2>${this.props.rental.zestimate || this.props.zestimate}</h2>
                        }
                        <h4 className="card-title">
                            <Link
                                  onClick={this.togglePropertyDetailModal}
                                  title="view the property"
                                  className="wbdv-hyperlink">{this.props.address}
                                  </Link>
                        </h4>
                        <Modal isOpen={this.state.propertyDetailIsActive}
                               onRequestClose={this.togglePropertyDetailModal}
                               style={customStyles}>
                            <div className="container">
                                <IndividualPropertyDetailComponent
                                    propertyTitle={this.props.address}/>
                                <button onClick={this.togglePropertyDetailModal}
                                        className="btn-primary btn btn-block">
                                    Back
                                </button>
                            </div>
                        </Modal>
                        {this.props.date &&
                         <p className="card-text text-white">
                             Available: {DateUtil.convertToDate(this.props.date)} <br/>
                         </p>
                        }
                    </div>
                    <div className="card-footer">
                        <i title="delete property"
                           className="fa fa-trash-alt wbdv-property-card-icon float-right"/>
                        <i title="manage appointments"
                           className="fa fa-address-book wbdv-property-card-icon float-right"
                           onClick={this.toggleModal}/>
                        <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}
                               style={customStyles}>
                            <div className="container">
                                <BookAppointmentComponent/>
                                <button onClick={this.toggleModal}
                                        className="btn-primary btn btn-block">
                                    Cancel
                                </button>
                            </div>
                        </Modal>
                        <span className="float-right">
                            {/*show/hide one of the heart icons below depending on the data of the property (fav vs not fav)*/}
                            <i className="fa fa-heart wbdv-fav-property-icon-active"/>
                            {/*<i className="fa fa-heart wbdv-fav-property-icon-inactive"></i>*/}
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}
