import React, { useContext, useReducer, useEffect } from 'react';
import { LoginContext, LoginStateContext } from './LoginPage';
import { fetchItemsRead } from './services';
import LogoutButton from './LogoutButton';
import RenderItems from './ItemsRenderer';
import SearchChoices from './SearchChoices'
import RenderCates from './CatesRenderer';
import AddItem from './AddItemBox';
import Cart from './Cart';
import checkoutReducer from './checkoutReducer';
import cartReducer from './cartReducer';
import initCart from './initCart';
import initData from './initData';

export const CheckoutDataContext = React.createContext();
export const CheckoutContext = React.createContext();
export const CartStateContext = React.createContext();
export const CartContext = React.createContext();

function CheckoutPage() {
    const state = useContext(LoginStateContext);
    const { username } = state;
    const [data, dispatch] = useReducer(checkoutReducer, initData);
    const { addItemBox } = data;
    const [cart, cartDispatch] = useReducer(cartReducer, initCart);
    const loginDispatch = useContext(LoginContext);

    useEffect(() => {
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
                    payload: {
                        error: error,
                    }
                })
            });
    }, [loginDispatch]);


    let addBox = '';
    if (addItemBox) {
        addBox = (
            <AddItem />
        )
    }

    return (
        <div className="content">
            <CheckoutContext.Provider value={dispatch}>
                <CheckoutDataContext.Provider value={data}>
                    <CartContext.Provider value={cartDispatch}>
                        <CartStateContext.Provider value={cart}>

                            <div className="products-interface">
                                <p className="title-text">Explore Products</p>
                                <SearchChoices />
                                <RenderCates />
                                <RenderItems />
                                {addBox}
                            </div>

                            <div className="cart-interface">
                                User: {username}
                                <LogoutButton />
                                <Cart />
                            </div>

                        </CartStateContext.Provider>
                    </CartContext.Provider>
                </CheckoutDataContext.Provider>
            </CheckoutContext.Provider>
        </div>
    )
}

export default CheckoutPage;
