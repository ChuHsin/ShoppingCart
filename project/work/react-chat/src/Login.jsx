import { fetchLogIn } from './services';
import { showMessages } from './ShowMessages';
import React from 'react';

const Login = ({ username, setUsername, setMessage, setLoginStatus, setErrorMessage }) => {

    return (
        <div className="login">
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={() => {
                fetchLogIn(username)
                    .then((response) => {
                        const messages = showMessages(response);
                        setMessage(messages);
                        setLoginStatus("YES");
                        setErrorMessage('');
                    })
                    .catch((err) => {
                        setErrorMessage(err.code);
                    });
            }}>
                Login
                 </button>

        </div>
    );
}

export default Login;
