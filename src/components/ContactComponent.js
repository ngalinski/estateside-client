import React from 'react';
import './css/PrivacyContact.css'
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import ContactService from "../services/ContactService";

const ContactComponent = ({state, login, logout, updateSelectedNavItem,toggleProfileUpdated, toggleContactRequested}) =>
    <div className="wbdv-contact-us">
        <div className="contact-top-bar">
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
                                    toggleContactRequested={toggleContactRequested}
            />
            <header id="wbdv-contact-heading">
                <h1>Contact Estateside</h1>
            </header>
        </div>
        <div className="contact-body container">

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
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <label htmlFor="message">
                                Message:</label>
                            <textarea className="form-control" id="message"
                                      name="message" placeholder="Type your message here"
                                      maxLength="4000" rows="7" value={state.contact.message}
                                      onChange={(event) => {
                                          updateContact(event.target.value, state.contact.name,
                                                        state.contact.email)
                                      }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name">
                                Your Name:</label>
                            <input type="text" className="form-control" id="name" name="name"
                                   required value={state.contact.name} onChange={(event) => {
                                updateContact(state.contact.message, event.target.value,
                                              state.contact.email)
                            }}/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="email">
                                Email:</label>
                            <input type="email" className="form-control" id="email" name="email"
                                   required value={state.contact.email} onChange={(event) => {
                                updateContact(state.contact.message, state.contact.name,
                                              event.target.value)
                            }}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <button type="submit" className="btn btn-lg btn-default"
                                    onClick={() => {
                                        ContactService.addContactRequest(state.contact);
                                        updateContact('', '', '');
                                        toggleContactRequested(true);
                                    }}>Send
                                →
                            </button>
                            <span className={`${!state.contactRequested ? "hidden"
                                                                        : ""} request-created-msg`}>Request Created!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer id="footer"><FooterComponent/></footer>
    </div>

export default ContactComponent;
