import React from "react";
import PropertyCardComponent from "./PropertyCardComponent";
import FooterComponent from "./FooterComponent";

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

const PropertyGridComponent = () => {
    return (
        <div className="container">
            <div className="wbdv-property-list">
                <header id="wbdv-property-list-heading">
                    <h1>Estateside Property List</h1>
                </header>

                <div className="form-group row">
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
