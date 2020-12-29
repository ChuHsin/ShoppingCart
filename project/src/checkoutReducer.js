function checkoutReducer(state, action) {
    switch (action.type) {
        case 'showCates':
            return {
                ...state,
                cates: action.payload.cates,
                cate: '',
                items: '',
                keyWords: '',
                searchBar: false,
                addItemBox: false,
            }
        case 'showItems':
            return {
                ...state,
                items: action.payload.items,
                cate: '',
                cates: '',
                keyWords: '',
                searchBar: false,
                addItemBox: false,
            }
        case 'showItemsOfCate':
            return {
                ...state,
                items: action.payload.items,
                cate: action.payload.cate,
                cates: '',
                keyWords: '',
                searchBar: false,
                addItemBox: false,
            }
        case 'showItemsOfKeyWords':
            return {
                ...state,
                items: action.payload.items,
                cate: '',
                cates: '',
                searchBar: true,
                addItemBox: false,
            }
        case 'showSearchBar':
            return {
                ...state,
                items: '',
                cate: '',
                cates: '',
                keyWords: '',
                searchBar: true,
                addItemBox: false,
            }
        case 'inputKeyWords':
            return {
                ...state,
                cate: '',
                cates: '',
                keyWords: action.payload.keyWords,
                searchBar: true,
                addItemBox: false,
            }
        case 'showAddBox':
            return {
                ...state,
                items: action.payload.items,
                cate: '',
                cates: '',
                keyWords: '',
                addAmount: 0,
                searchBar: false,
                addItemBox: true,
            }
        case 'updateAddAmount':
            return {
                ...state,
                cate: '',
                cates: '',
                keyWords: '',
                addAmount: action.payload.addAmount,
                searchBar: false,
                addItemBox: true,
            }
        default:
            return state;
    }
}

export default checkoutReducer;