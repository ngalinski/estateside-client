import React from 'react';
import '../components/css/HomeComponent.css'
import FooterComponent from "./FooterComponent";

const HelpComponent = () =>
    <div className="wbdv-container">
        <div className="panel-group" id="accordion">
            <h1 className="faqHeader">General Questions</h1>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle" data-toggle="collapse"
                           data-parent="#accordion"
                           href="#collapseOne">Is account registration required?</a>
                    </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                        Account registration is not required.
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion"
                           href="#collapseTen">Placeholder question</a>
                    </h4>
                </div>
                <div id="collapseTen" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder answer.
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion" href="#collapseEleven">Placeholder question.</a>
                    </h4>
                </div>
                <div id="collapseEleven" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder answer.
                    </div>
                </div>
            </div>

            <h1 className="faqHeader">Accounts</h1>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion" href="#collapseTwo">Placeholder question</a>
                    </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder answer.
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion" href="#collapseThree">Placeholder question</a>
                    </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder answer.
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion" href="#collapseFive">Placeholder question</a>
                    </h4>
                </div>
                <div id="collapseFive" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder question.
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion" href="#collapseSix">Placeholder question</a>
                    </h4>
                </div>
                <div id="collapseSix" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder answer.
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion" href="#collapseEight">Placeholder question</a>
                    </h4>
                </div>
                <div id="collapseEight" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder answer.
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion" href="#collapseNine">Placeholder question</a>
                    </h4>
                </div>
                <div id="collapseNine" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder answer.
                    </div>
                </div>
            </div>

            <h1 className="faqHeader">Listings</h1>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion" href="#collapseFour">Placeholder question</a>
                    </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder answer
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                           data-parent="#accordion" href="#collapseSeven">Placeholder question</a>
                    </h4>
                </div>
                <div id="collapseSeven" className="panel-collapse collapse">
                    <div className="panel-body">
                        Placeholder answer.
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <FooterComponent/>
    </div>

export default HelpComponent
