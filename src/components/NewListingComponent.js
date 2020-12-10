import React from "react";

export const NewListingComponent = () => {
    return (
        <div>
            <p style={{color: "white"}}>Enter details of the property..</p>
            <div className="form-group row">
                <label htmlFor="street" className="col-sm-3 col-form-label"> Street </label>
                <div className="col-sm-9">
                    <input className="form-control"
                           id="street" type="text" name="street" placeholder="Enter street"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="city" className="col-sm-3 col-form-label"> City </label>
                <div className="col-sm-9">
                    <input className="form-control"
                           id="city" type="text" name="city" placeholder="Enter city"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="zip" className="col-sm-3 col-form-label"> Zip </label>
                <div className="col-sm-9">
                    <input className="form-control"
                           id="zip" type="text" name="zip" placeholder="Enter zip"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="rent" className="col-sm-3 col-form-label"> Rent </label>
                <div className="col-sm-9">
                    <input className="form-control"
                           id="rent" type="text" name="rent" placeholder="Enter monthly rent"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="area" className="col-sm-3 col-form-label"> Area </label>
                <div className="col-sm-9">
                    <input className="form-control"
                           id="area" type="text" name="area" placeholder="Enter area in sqft"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="vehicle1" className="col-sm-3 col-form-label"> Mark the amenities
                    included</label>
                <div className="col-sm-9">
                    <input type="checkbox" id="amenity1" name="amenity1" value="ac"/>
                    <label htmlFor="amenity1"> A.C.</label>
                    <input type="checkbox" id="amenity2" name="amenity2" value="heater"/>
                    <label htmlFor="amenity2"> Heater</label>
                    <input type="checkbox" id="amenity3" name="amenity3" value="laundry"/>
                    <label htmlFor="amenity3"> Laundry</label>
                    <input type="checkbox" id="amenity4" name="amenity4"
                           value="management-services"/>
                    <label htmlFor="amenity4"> Management Services</label>
                </div>
            </div>

            <button className="btn-primary btn btn-block">
                Save
            </button>
            <br/>
        </div>
    )
};
