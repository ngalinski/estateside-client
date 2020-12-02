const userUrl = "/api/users"; // user property endpoint to be finalized

const findAllUsers = () => {
    return (
        fetch(userUrl)
            .then(response => response.json())
    )
}

const findUserById = (userId) => {
    return (
        fetch(`${userUrl}/${userId}`)
            .then(response => response.json())
    )
}

const createUser = (user) => {
    return (
        fetch(userUrl, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

const deleteUser = (userId) => {
    return (
        fetch(`${userUrl}/${userId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    )
}

const updateUser = (userId, user) => {
    return (
        fetch(`${userUrl}/${userId}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
};

export default {findAllUsers, findUserById, createUser, deleteUser, updateUser}
