function loginReducer(state, action) {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: '',
                error: '',
                isLoading: false,
            }
        case 'success':
            return {
                ...state,
                username: action.payload.username,
                isLoggedIn: true,
                isLoading: false,
            }
        case 'error':
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            }
        case 'input':
            return {
                ...state,
                username: action.payload.username,
            }
        default:
            return state;
    }
}

export default loginReducer;