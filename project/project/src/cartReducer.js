function cartReducer(state, action) {
    switch (action.type) {
        case 'showItems':
            return {
                ...state,
                cartItems: action.payload.cartItems,
                subTotal: '',
                itemsNumber: 0,
            }
            default:
                return state;
        }
}

export default cartReducer;