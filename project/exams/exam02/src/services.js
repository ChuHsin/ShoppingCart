export const fetchLogIn = (username) => {
    return fetch('/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ username }),
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
}

export const fetchLogOut = () => {
    return fetch('/session/logout', {
        method: 'POST',

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

export const fetchLoginStatus = () => {
    return fetch('/session', {
        method: 'GET',
    })
        .catch(() => {
            console.log('catched');
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            console.log('responsed');
            return;
        });
};

export const fetchRecipes = () => {
    return fetch('/recipes', {
        method: 'GET',
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return Promise.reject({ code: 'Getting recipes failed' });
            }
            return response.json();
        });
};

export const fetchAddRecipe = (recipe) => {
    return fetch('/recipes', {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ recipe }),
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

export const fetchSingleRecipe = (id) => {
    return fetch('/recipes/' + id, {
        method: "GET",
    })
        .catch(() => {
            return Promise.reject({ code: 'There is a network-error' });
        })
        .then((response) => {
            if (!response.ok) {
                return Promise.reject({ code: 'Getting details failed' });
            }
            return response.json();
        });
}