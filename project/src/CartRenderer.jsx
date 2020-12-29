import React, { useContext } from 'react';
import { CartStateContext } from './CheckoutPage';

function CartRenderer() {
    const cart = useContext(CartStateContext);
    const { cartItems } = cart;
    if (cartItems !== '') {
        return (
            cartItems.map(item => (
                <li>
                    <div className="item">
                        <div className="item-name">
                            {item.itemName}
                        </div>

                        <div className="item-amount">
                            {item.itemAmount} {item.itemCount}
                        </div>
                            @
                            <div className="item-unit-price">
                            ${item.itemUnitPrice}/{item.itemUnit}
                        </div>
                        <div className="item-price">
                            ${item.itemPrice}
                        </div>
                    </div>
                </li>))
        );
    }
    return (
        <div></div>
    );
}

export default CartRenderer;