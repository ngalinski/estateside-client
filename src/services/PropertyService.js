const propertyUrl = "/api/properties"; // server property endpoint to be finalized
const userUrl = "/api/users"; // user property endpoint to be finalized
const skipUrl = "?offset=<no. of properties to skip>";

const getPropertiesForCity = (location) => {
    return (
        fetch(`${propertyUrl}/${location}${skipUrl}`)
            .then(response => response.json())
    )
}

const getPropertyById = (propertyId) => {
    return (
        fetch(`${propertyUrl}/${propertyId}`)
            .then(response => response.json())
    )
}

const createProperty = (property) => {
    return (
        fetch(propertyUrl, {
            method: "POST",
            body: JSON.stringify(property),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

const deleteProperty = (propertyId) => {
    return (
        fetch(`${propertyUrl}/${propertyId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    )
}

const updateProperty = (propertyId, property) => {
    return (
        fetch(`${propertyUrl}/${propertyId}`, {
            method: "PUT",
            body: JSON.stringify(property),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

// return favourite properties for a specific user (customer)
const getFavProperties = (userId) => {
    return (
        fetch(`${userUrl}/${userId}}/favorites`)
            .then(response => response.json())
    )
}

// return hosted properties for a landlord
const getHostedProperties = (userId) => {
    return(
        fetch(`${userUrl}/${userId}}/properties`)
            .then(response => response.json())
    )
}
