import React, { useReducer } from 'react';
import initState from './initState';
import LoginButton from './LoginButton';
import CheckoutPage from './CheckoutPage';
import loginReducer from './loginReducer';

export const LoginContext = React.createContext();
export const LoginStateContext = React.createContext();

function LoginPage() {
    const [state, dispatch] = useReducer(loginReducer, initState);
    const { error, isLoggedIn } = state;


    let menu = (
        <div className="login">
            <LoginContext.Provider value={dispatch}>
                <LoginStateContext.Provider value={state}>
                    <div className="login-area">
                    <div className="error-message">{error}</div>
                    <p className="title-text">Welcome to Null Foods Market!</p>
                    <LoginButton />
                    </div>
                </LoginStateContext.Provider>
            </LoginContext.Provider>
        </div>)

    if (isLoggedIn) {
        menu = (
            <LoginContext.Provider value={dispatch}>
                <LoginStateContext.Provider value={state}>
                    <div className="error-message">{error}</div>
                    <CheckoutPage />
                </LoginStateContext.Provider>
            </LoginContext.Provider>)
    }
    return (
        <div>
            {menu}
        </div>
    )
}

export default LoginPage;