import React, { useEffect, useContext } from 'react';
import { fetchAllRead } from './services';
import { LoginContext, LoginStateContext } from './LoginPage';
import { CartContext } from './CheckoutPage';
import RenderCart from './CartRenderer';
import RenderTotal from './TotalPriceRenderer';
import CheckoutButton from './CheckoutButton';


function Cart() {
    const state = useContext(LoginStateContext);
    const { username } = state;
    const loginDispatch = useContext(LoginContext);
    const cartDispatch = useContext(CartContext);

    useEffect(() => {
        fetchAllRead(username)
            .then((response) => {
                cartDispatch({
                    type: 'showItems',
                    payload: {
                        cartItems: response.data,
                    }
                });
            })
            .catch((error) => {
                loginDispatch({
                    type: 'error',
                    payload: { error: error }
                });
            });
    }, [cartDispatch,username, loginDispatch]);

    return (
        <div className="cart">
            <p>Your Cart</p>
            <RenderCart />
            <RenderTotal />
            <div className="checkout-button">
                <CheckoutButton />
            </div>
        </div>

    )
}

export default Cart;