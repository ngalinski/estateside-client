import React from 'react';
import '../components/css/Help.css'
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";

const HelpComponent = ({state, login, logout, updateSelectedNavItem, toggleProfileUpdated, toggleContactRequested, updateContact}) =>
    <div className="wbdv-help">
        <div className="help-top-bar">
            <TopNavigationComponent state={state}
                                    login={login}
                                    logout={logout}
                                    updateSelectedNavItem={updateSelectedNavItem}
                                    toggleProfileUpdated={toggleProfileUpdated}
                                    toggleContactRequested={toggleContactRequested}
                                    updateContact={updateContact}
            />
            <header id="wbdv-help-heading">
                <h1>FAQs</h1>
            </header>
        </div>
        <div className="help-body container">
            <h1 className="faqHeader">General Questions</h1>
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion">
                                Is account registration required?
                            </a>
                        </h4>
                    </div>
                    <div className="panel-collapse collapse in">
                        <div className="panel-body">
                            Account registration is not required.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default ">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion"
                               href="#collapseTwo">What is Estateside?</a>
                        </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                            Estateside is a property rental application. Please see the "info" tab for
                            more information.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseEleven">Is Estateside trustworthy?</a>
                        </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse">
                        <div className="panel-body">
                            Estateside brings renters to properties and properties to renters. We verify
                            property managers before listings are posted and verify renters before they
                            can make an account.
                        </div>
                    </div>
                </div>
                <br/>
                <h1 className="faqHeader">Accounts</h1>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseTwo">How do I sign up for an account?</a>
                        </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse">
                        <div className="panel-body">
                            Under the "Login" screen, there is an additional place to "Register."
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseThree">Do I have to have an
                                account to schedule an appointment?</a>
                        </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse">
                        <div className="panel-body">
                            An account is required to make an appointment.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseFive">How do I update my information?</a>
                        </h4>
                    </div>
                    <div id="collapseSix" className="panel-collapse collapse">
                        <div className="panel-body">
                            Once logged into your account, select your "profile" and you will be able to
                            update your information.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseSix">How do I delete my account?</a>
                        </h4>
                    </div>
                    <div id="collapseSeven" className="panel-collapse collapse">
                        <div className="panel-body">
                            From your profile, click the "delete account" button. This will permanently
                            delete your account and none of your saved properties or history will be
                            recoverable.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseEight">How is my information kept safe?</a>
                        </h4>
                    </div>
                    <div id="collapseEight" className="panel-collapse collapse">
                        <div className="panel-body">
                            Estateside will not sell, post, or otherwise use your information without your
                            expressed permission. Please refer to our privacy policy for more
                            information.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseNine">How do I report a suspicious rental?</a>
                        </h4>
                    </div>
                    <div id="collapseNine" className="panel-collapse collapse">
                        <div className="panel-body">
                            Contact Estateside via the "Contact Us" tab.
                        </div>
                    </div>
                </div>
                <br/>
                <h1 className="faqHeader">Listings</h1>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseFour">How do I search listings?</a>
                        </h4>
                    </div>
                    <div id="collapseTen" className="panel-collapse collapse">
                        <div className="panel-body">
                            Enter a location (either a ZipCode or City,State) in the search bar, then
                            click the "Search" button.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseSeven">How can I save listings I like?</a>
                        </h4>
                    </div>
                    <div id="collapseEleven" className="panel-collapse collapse">
                        <div className="panel-body">
                            From the search results page, you will be able to save the listing.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseSeven">What about scams?</a>
                        </h4>
                    </div>
                    <div id="collapseTwelve" className="panel-collapse collapse">
                        <div className="panel-body">
                            There are a variety of ways to check for scams. Estateside will never ask you
                            for money. Additionally, if the property manager is asking for a MoneyOrder,
                            Visa Prepaid Card, or other prepaid money option or if the deal seems to good
                            to be true, it might be. Be wary of scams and use your best judgement.
                        </div>
                    </div>
                </div>
                <br/>
                <h1 className="faqHeader">Contacting a Property</h1>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseFour">How do I contact a property?</a>
                        </h4>
                    </div>
                    <div id="collapseThirteen" className="panel-collapse collapse">
                        <div className="panel-body">
                            From a property page, you can make an appointment to view a property.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a className="accordion-toggle collapsed" data-toggle="collapse"
                               data-parent="#accordion" href="#collapseSeven">I've seen a property. What's next?</a>
                        </h4>
                    </div>
                    <div id="collapseFourteen" className="panel-collapse collapse">
                        <div className="panel-body">
                            At this point, if you like property, you can work with the property manager
                            for further steps. If you didn't like it, there's no obligation!
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer id="footer"><FooterComponent/></footer>
    </div>

export default HelpComponent
