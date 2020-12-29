
export const fetchLogout = () => {
    return fetch('/session/', {
        method: 'DELETE',
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response;
        });
};

export const fetchLogIn = (username) => {
    return fetch('/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ username }),
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a networkerror' });
        })
        .then((response) => {

            if (!response.ok) {
                return response.json().then(
                    result => Promise.reject(result)
                );
            }
            return response.json();
        });
}

export const fetchLoginStatus = () => {
    return fetch('/session', {
        method: 'GET',
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};

export const fetchSendMessage = (message) => {

    return fetch('/sendMessage', {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ message }),
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};