import React, {useContext } from 'react';
import {LoginContext } from './LoginPage';
import { CheckoutContext, CheckoutDataContext } from './CheckoutPage';
import { fetchItemsRead, fetchCatesRead} from './services';
import SearchBar from './SearchBar';

function SearchChoices() {
    const loginDispatch = useContext(LoginContext);
    const data = useContext(CheckoutDataContext);
    const dispatch = useContext(CheckoutContext);
    const {  searchBar } = data;
    let searchArea = '';

    function clickCate(){
        fetchCatesRead()
                .then((response) => {
                    dispatch({
                        type: 'showCates', 
                        payload: { cates: response.data }
                    });
                })
                .catch((error) => {
                    loginDispatch({
                        type: 'error', 
                        payload: { error: error }
                    });
                });
    }

    function clickKey(){
        dispatch({
            type: 'showSearchBar', 
        });
    }

    function clickPics(){
        fetchItemsRead()
        .then((response) => {
            dispatch({
                type: 'showItems',
                payload: { 
                    items: response.data,
                 }
            });
        })
        .catch((error) => {
            loginDispatch({
                type: 'error', 
                payload: { error: error.message }
            });
        });
    }

    if(searchBar){
        searchArea = <SearchBar/>
    }
    return (
<div className="search-options">
    <button onClick={()=>{clickCate()}}>Search By Categories</button>
    <button onClick={()=>{clickKey()}}>Search By Key Words</button>
    <button onClick={()=>{clickPics()}}>Search By Pictures</button>
    {searchArea}
</div>
        )
}

export default SearchChoices;