import React, { useContext } from 'react';
import { LoginContext, LoginStateContext } from './LoginPage';
import { fetchLogIn } from './services';

function LoginButton() {
    const dispatch = useContext(LoginContext);
    const state = useContext(LoginStateContext);


    function inputUsername(e) {
        dispatch({
            type: 'input',
            payload: { username: e.target.value }
        });
    }

    const login = () => {
        dispatch({
            type: 'login',
        });
        fetchLogIn(state.username)
            .then((response) => {
                dispatch({
                    type: 'success',
                    payload: { username: response.data.username }
                });

            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: 'error',
                    payload: { error: error }
                });
            });
    }

    return (

        <div className="login-box">
            <h2>Null Foods Market</h2>
            <div className="user-box">
                <input type="text" placeholder="Input Your Username" onChange={inputUsername} />
                <label>Username</label>
            </div>
            <a onClick={login}>
                Login
            </a>
        </div>


    )
}

export default LoginButton;