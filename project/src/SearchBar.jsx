import React, { useContext } from 'react';
import { LoginContext } from './LoginPage';
import { CheckoutContext, CheckoutDataContext } from './CheckoutPage';

import { fetchItemsRead } from './services';

function SearchBar() {
    const data = useContext(CheckoutDataContext);
    const { keyWords } = data;
    const dispatch = useContext(CheckoutContext);
    const loginDispatch = useContext(LoginContext);

    function updateKeywords(e) {
        dispatch({
            type: 'inputKeyWords',
            payload: {
                keyWords: e.target.value,
            }
        });
    }

    function search() {
        fetchItemsRead()
            .then((response) => {
                dispatch({
                    type: 'showItemsOfKeyWords',
                    payload: {
                        items: response.data,
                    }
                });
            })
            .catch((error) => {
                loginDispatch({
                    type: 'error',
                    payload: { error: error }
                });
            });
    }

    return (
        <div className="search-bar">
            <input defaultValue={keyWords} onChange={(e) => { updateKeywords(e) }} />
            <button onClick={() => { search() }}> Search </button>
        </div>
    )
}

export default SearchBar;