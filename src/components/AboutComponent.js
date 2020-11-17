import React from 'react';
import './css/HomeComponent.css'
import FooterComponent from "./FooterComponent";

const AboutComponent = () =>
    <div className="container">
        <div className="wbdv-about-us">
            <header id="wbdv-about-heading">
                <h1>About Estateside</h1>
            </header>

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
                Built by: Prajakta Dharme, Japher Su, Nicholas Galinski, Zoheb Nawaz
            </p>
            <p>
                Built using: React, NodeJS, and the Zillow API.
            </p>
        </div>
        <FooterComponent/>
    </div>

export default AboutComponent;
