import React from "react";

export const NewListingComponent = () => {
        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-3 col-form-label"> Username </label>
                    <div className="col-sm-9">
                        <input className="form-control wbdv-field wbdv-username"
                               id="username" type="text" name="password" placeholder="Your username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-3 col-form-label"> Phone </label>
                    <div className="col-sm-9">
                        <input className="form-control wbdv-field wbdv-phone"
                               id="phone" type="text" name="phone" placeholder="(617)-123-1234"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-3 col-form-label"> Email </label>
                    <div className="col-sm-9">
                        <input className="form-control wbdv-field wbdv-email"
                               id="email" type="email" name="email" placeholder="xyz@northeastern.edu"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="dob" className="col-sm-3 col-form-label"> Date of Birth </label>
                    <div className="col-sm-9">
                        <input className="form-control"
                               id="dob" type="date" name="dateOfBirth"/>
                    </div>
                </div>

            </div>

        )
}
