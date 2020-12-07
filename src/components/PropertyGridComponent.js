import React from "react";
import PropertyCardComponent from "./PropertyCardComponent";
import FooterComponent from "./FooterComponent";
import TopNavigationComponent from "./TopNavigationComponent";
import "./css/PropertyGridComponent.css"

const dummyPropertyData = [
    {
        id: "65679409",
        imageUrl: "https://picsum.photos/300/200",
        rent: "$2000",
        address: "900 Huntington Ave, Boston",
        available: "01/01/2020 - 08/31/2021",
        contactInfo: "123-345-6789"
    },
    {
        id: "65679409",
        imageUrl: "https://picsum.photos/300/200",
        rent: "$2000",
        address: "900 Huntington Ave, Boston",
        available: "01/01/2020 - 08/31/2021",
        contactInfo: "123-345-6789"
    },
    {
        id: "65679409",
        imageUrl: "https://picsum.photos/300/200",
        rent: "$2000",
        address: "900 Huntington Ave, Boston",
        available: "01/01/2020 - 08/31/2021",
        contactInfo: "123-345-6789"
    },
    {
        id: "65679409",
        imageUrl: "https://picsum.photos/300/200",
        rent: "$2000",
        address: "900 Huntington Ave, Boston",
        available: "01/01/2020 - 08/31/2021",
        contactInfo: "123-345-6789"
    },
    {
        id: "65679409",
        imageUrl: "https://picsum.photos/300/200",
        rent: "$2000",
        address: "900 Huntington Ave, Boston",
        available: "01/01/2020 - 08/31/2021",
        contactInfo: "123-345-6789",
    },
    {
        id: "65679409",
        imageUrl: "https://picsum.photos/300/200",
        rent: "$2000",
        address: "900 Huntington Ave, Boston",
        available: "01/01/2020 - 08/31/2021",
        contactInfo: "123-345-6789"
    }
]

const PropertyGridComponent = ({
                                   state, login, logout, updateSelectedNavItem, toggleProfileUpdated,
                                   toggleContactRequested, updateContact
                               }) => {
    return (
        <div className="wbdv-property">
            <div>
                <div className="container form-group row property-body">
                    {
                        dummyPropertyData.map(property =>
                                                  <PropertyCardComponent property={property}
                                                  />)
                    }
                </div>
            </div>
            <FooterComponent/>
        </div>

    )
}

export default PropertyGridComponent;
