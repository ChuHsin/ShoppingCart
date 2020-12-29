import React, { useContext } from 'react';
import { CartStateContext } from './CheckoutPage';

function TotalPriceRenderer() {
    const cart = useContext(CartStateContext);
    const { cartItems } = cart;
    if (cartItems !== '') {
        let totalPrice = 0;
        cartItems.forEach(element => {
            totalPrice = parseFloat(totalPrice) + parseFloat(element.itemPrice)
        });
        totalPrice = totalPrice.toFixed(2);
        return (
            <div className="total-price">Total: ${totalPrice}
            </div>
        );
    }
    return (
        <div></div>
    );
}

export default TotalPriceRenderer;