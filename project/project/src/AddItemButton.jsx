import React, { useContext } from 'react';
import { CheckoutContext, CheckoutDataContext } from './CheckoutPage';

function AddItemButton(id) {
    const data = useContext(CheckoutDataContext);
    const dispatch = useContext(CheckoutContext);
    const { items, addItemBox } = data;

    const showAddBox = () => {
        dispatch({
            type: 'showAddBox',
            payload: {
                items: [items[id.id]],
            }
        });
    }

    if (addItemBox) {
        return (
            <span></span>
        )
    }

    return (
        <div className="product-social-icons">
            <span onClick={showAddBox}> Add to Cart </span>
        </div>
    )
}

export default AddItemButton;