import React, { useContext } from 'react'
import { fetchItemsRead } from './services';
import { CheckoutContext, CheckoutDataContext } from './CheckoutPage';
import { LoginContext } from './LoginPage';


const CatesRenderer = () => {
    const loginDispatch = useContext(LoginContext);
    const data = useContext(CheckoutDataContext);
    const dispatch = useContext(CheckoutContext);
    const { cates } = data;

    let catesArray = Object.keys(cates);

    function showCategory(Category) {
        fetchItemsRead()
            .then((response) => {
                dispatch({
                    type: 'showItemsOfCate',
                    payload: {
                        items: response.data,
                        cate: Category,
                    }
                });
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
        catesArray.map(Category => (
            <div className="product-card" onClick={() => { showCategory(Category) }}>

                <img className="product-image" src={process.env.PUBLIC_URL + cates[Category].picture} alt="Category" height="180" width="170" />

                <div className="product-description">
                    <h5> {cates[Category].category}</h5>
                </div>
            </div>
        )));
}

export default CatesRenderer;