import React, { useContext } from 'react';
import { LoginContext, LoginStateContext } from './LoginPage';
import { CheckoutContext, CheckoutDataContext, CartContext } from './CheckoutPage';
import { fetchOneAdd } from './services';


function AddItemBox() {
    const state = useContext(LoginStateContext);
    const loginDispatch = useContext(LoginContext);

    const data = useContext(CheckoutDataContext);
    const dispatch = useContext(CheckoutContext);
    const { items, addAmount } = data;
    const { username } = state;
    const cartDispatch = useContext(CartContext);

    function changeAmount(e) {
        dispatch({
            type: 'updateAddAmount',
            payload: { addAmount: e.target.value }
        });
    }

    function addItem(itemId) {
        fetchOneAdd(username, itemId, addAmount)
            .then((response) => {
                cartDispatch({
                    type: 'showItems',
                    payload: {
                        cartItems: response.data,
                    }
                });
                dispatch({
                    type: 'showAddBox',
                    payload: {
                        items: items,
                    }
                })
                loginDispatch({
                    type: 'error',
                    payload: {
                        error: '',
                    }
                })
            })
            .catch((error) => {
                loginDispatch({
                    type: 'error',
                    payload: {
                        error: error,
                    }
                })
            });
    }

    return (
        <div className="add-item">
            Amount: <input placeholder={items[0].itemUnit} value={addAmount} onChange={(e) => changeAmount(e)} />
            <button onClick={() => addItem(items[0].itemId)}>Add</button>
        </div>
    )
}

export default AddItemBox;