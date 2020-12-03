const propertyUrl = "/api/properties"; // server property endpoint to be finalized
const userUrl = "/api/users"; // user property endpoint to be finalized

const findPropertiesForCity = ({location, offset = 0}) => {
    return (
        fetch(`${propertyUrl}?location=${location}&offset=${offset}`)
            .then(response => response.json())
    )
}

const findPropertyById = (propertyId) => {
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


// return hosted properties for a landlord
const findHostedProperties = (userId) => {
    return (
        fetch(`${userUrl}/${userId}}/properties`)
            .then(response => response.json())
    )
}

// return favourite properties for a specific user (customer)
const findFavProperties = (userId) => {
    return (
        fetch(`${userUrl}/${userId}}/favorites`)
            .then(response => response.json())
    )
}

// mark a property as favourite for a user
const createFavProperty = (userId, property) => {
    return (
        fetch(`${userUrl}/${userId}/favorites`, {
            method: "POST",
            body: JSON.stringify(property),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

// unmark a favourite property for a user
const deleteFavProperty = (userId, propertyId) => {
    return (
        fetch(`${userUrl}/${userId}/favorites/${propertyId}`, {
            method: "DELETE",
        })
            .then(response => response.json())
    )
}

export default {
    findPropertiesForCity,
    findPropertyById,
    createProperty,
    deleteProperty,
    updateProperty,
    findHostedProperties,
    findFavProperties,
    createFavProperty,
    deleteFavProperty
}
