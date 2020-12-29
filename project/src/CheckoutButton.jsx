import React, { useContext } from 'react';
import { LoginStateContext } from './LoginPage';
import { CheckoutContext, CartStateContext, CartContext } from './CheckoutPage';
import { fetchCheckout } from './services';

function CheckoutButton() {
    const state = useContext(LoginStateContext);
    const dispatch = useContext(CheckoutContext);
    const { username } = state;
    const cart = useContext(CartStateContext);
    const { cartItems } = cart;
    const cartDispatch = useContext(CartContext);

    function checkout() {
        fetchCheckout(username, cartItems)
            .then((response) => {
                cartDispatch({
                    type: 'showItems',
                    payload: {
                        cartItems: response.data,
                    }
                });
                dispatch({
                    type: 'showSearchBar',
                })
            })
    }

    return (
        <div className="checkout-button">
            <button onClick={() => checkout()}>Checkout</button>
        </div>
    )
}

export default CheckoutButton;