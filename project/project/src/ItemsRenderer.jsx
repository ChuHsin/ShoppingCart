import React, { useContext } from 'react'
import AddItemButton from './AddItemButton';
import { CheckoutDataContext } from './CheckoutPage';
import { cateFilter, keyWordsFilter } from './filter';

const ItemsRenderer = () => {
    const data = useContext(CheckoutDataContext);

    const { items, cate, keyWords } = data;
    let itemsArray = Object.keys(items);
    itemsArray = cateFilter(cate, itemsArray, items);
    itemsArray = keyWordsFilter(keyWords, itemsArray, items);

    return (
        itemsArray.map(item => (

            <div className="product-card">

                <img className="product-image" src={items[item].picture} alt="Product" height="180" width="170" />
                <div className="product-image-title">
                    <p>Unit Price: ${items[item].itemUnitPrice}</p>
                    <p>Stock: {items[item].itemStock}</p>
                </div>
                <div className="product-description">
                    <h5> {items[item].itemName}</h5>
                </div>
                <AddItemButton id={items[item].itemId} />
            </div>
        )));
}

export default ItemsRenderer;
