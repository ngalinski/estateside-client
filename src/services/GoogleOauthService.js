const login = async (code, role) => {
    return fetch(`/api/auth/google/${role}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({code}),
    }).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res);
        }
    });
};

export {login};
