import React from "react";
import "./css/PropertyGridComponent.css"

export const BookAppointmentComponent = () => {
    return (
        <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-md-push-5">
                            <div className="booking-cta">
                                <h1>Book your appointment</h1>
                                <p>Our property appointments can be booked here. Once you make an
                                    appointment, a showing agent will contact you to confirm
                                    the site visit. Feel free to ask us any questions about the
                                    Property during the visit appointment.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-md-pull-7">
                            <div className="booking-form">
                                <form>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <span className="form-label"
                                                      style={{color: "white"}}>Date</span>
                                                <input className="form-control" type="date"
                                                       required/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <span className="form-label"
                                                  style={{color: "white"}}>Time</span>
                                            <input className="form-control" type="time"
                                                   min="09:00" max="18:00" required/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">
                                            Message:</label>
                                        <textarea className="form-control" type="textarea"
                                                  id="message"
                                                  name="message" maxLength="4000" rows="7"/>
                                    </div>

                                    <div className="form-btn">
                                        <button className="submit-btn">Book appointment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
