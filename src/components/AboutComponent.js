import React from 'react';
import './css/ProfileComponent.css'
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const AboutComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated, toggleContactRequested, updateContact}) =>
    <div className="wbdv-about-us">
        <div className="about-top-bar">
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
                                    toggleContactRequested={toggleContactRequested}
                                    updateContact={updateContact}
            />
            <header id="wbdv-about-heading">
                <h1>About Estateside</h1>
            </header>
        </div>
        <div className="container about-body">
            <h3>General Information</h3>
            <p>
                This project is made as a part of the course CS5610 Web Development at Northeastern
                University.
            </p>
            <p>
                The objective of the project is to make a property rental application
                that would allow users to interactively search properties in the selected area,
                inspect the different aspects associated with a property like the property type,
                amenities, parking etc. as well as express their interest in a particular property
                by contacting the associated property advertiser.
            </p>
            <p>
                We are using Zillow’s public APIs. Zillow has a variety of apartment options to buy, sell and rent. The
                Web API endpoints return JSON metadata about the apartments located in a particular location based on
                REST principles. We will use the web API to provide search details based on various filters.
            </p>
            <h3>Built using: </h3>
            <p> Database: MongoDB </p>
            <p> Back End: Java/NodeJS </p>
            <p> Front End: HTML, CSS, Bootstrap, Javascript, Angular 9, React </p>
            <p> Host environment: Heroku</p>
            <p>
                Built by Prajakta Dharme, Japher Su, Nicholas Galinski, Zoheb Nawaz
            </p>
        </div>
        <footer id="footer"><FooterComponent/></footer>
    </div>

export default AboutComponent;
