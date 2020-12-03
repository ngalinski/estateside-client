const contactApiUrl = '/api/contacts'
const addContactRequest = (contactRequest) => {
    return (
        fetch(`${contactApiUrl}`, {
            method: "POST",
            body: JSON.stringify(contactRequest),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
};

export default {addContactRequest}
