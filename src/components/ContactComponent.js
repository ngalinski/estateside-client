import React from 'react';
import './css/HomeComponent.css'
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const ContactComponent = ({state, login, logout, updateSelectedNavItem,toggleProfileUpdated}) =>
    <div>
        <div className="contact-top-bar">
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
            />
        </div>
        <header id="wbdv-contact-heading">
            <h1>Contact Estateside</h1>
        </header>
        <div className="wbdv-contact-us container">

            <h3>General Contact Information</h3>
            <p>
                To reach the creators of Estateside, please reach fill out the contact form below.
                Alternatively, you can reach out to Northeastern University and reference CS5610 -
                Fall 2020 and then mention Estateside.
            </p>
            <p>
                Thanks for reaching out. We will get back to you as soon as we can.
            </p>

            <div className="row">
                <div className="col-md-6 col-md-offset-3" id="form_container">
                    <h2>Contact Us</h2>
                    <p>
                        Fill out the form below and we will get back to you.
                    </p>
                    <form method="post" id="reused_form">

                        <div className="row">
                            <div className="col-sm-12 form-group">
                                <label htmlFor="message">
                                    Message:</label>
                                <textarea className="form-control" type="textarea" id="message"
                                          name="message" maxLength="4000" rows="7"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <label htmlFor="name">
                                    Your Name:</label>
                                <input type="text" className="form-control" id="name" name="name"
                                       required></input>
                            </div>
                            <div className="col-sm-6 form-group">
                                <label htmlFor="email">
                                    Email:</label>
                                <input type="email" className="form-control" id="email" name="email"
                                       required></input>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12 form-group">
                                <button type="submit" className="btn btn-lg btn-default">Send
                                    →
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>

export default ContactComponent;
