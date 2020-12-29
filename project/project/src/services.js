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
                    result => Promise.reject(result.message)
                );
            }
            return response.json();
        });
};

export const fetchLogout = () => {
    return fetch('/session/', {
        method: 'DELETE',
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result.message));
            }
            return response;
        });
};

export const fetchAllRead = (username) => {
    return fetch('/orders/' + username, {
        method: 'GET',
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result.message));
            }
            return response.json();
        });
};

export const fetchOneAdd = (username, itemId, addAmount) => {
    return fetch('/orders/' + username, {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({
            item: {
                username: username,
                itemId: itemId,
                addAmount: addAmount,
            }
        }),
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a networkerror' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(
                    result => Promise.reject(result.message)
                );
            }
            return response.json();
        });
};

export const fetchCheckout = (username, cartItems) => {
    return fetch('/orders/' + username, {
        method: 'PUT',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ order: cartItems }),
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a networkerror' });
        })
        .then((response) => {

            if (!response.ok) {
                return response.json().then(
                    result => Promise.reject(result.message)
                );
            }
            return response.json();
        });
};

export const fetchItemsRead = () => {
    return fetch('/items/', {
        method: 'GET',
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result.message));
            }
            return response.json();
        });
};

export const fetchCatesRead = () => {
    return fetch('/items/categories', {
        method: 'GET',
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result.message));
            }
            return response.json();
        });
};