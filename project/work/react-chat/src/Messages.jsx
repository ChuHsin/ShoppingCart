import React, { useEffect, useState } from 'react';
import {
    fetchLoginStatus,
} from './services';

import Login from './Login';
import { showMessages } from './ShowMessages';
import LoggedIn from './LoggedIn';


function Messages({ loginStatus, setLoginStatus, errorMessage, setErrorMessage }) {
    const [message, setMessage] = useState('The Chat Room');
    const [inputMessage, setInputMessage] = useState('');
    const [username, setUsername] = useState('')

    let information = '';

    if (loginStatus === "YES") {
        information = (
            <LoggedIn
                inputMessage={inputMessage} setInputMessage={(inputMessage) => setInputMessage(inputMessage)}
                username={username} setUsername={(username) => setUsername(username)}
                message={message} setMessage={(message) => setMessage(message)}
                loginStatus={loginStatus} setLoginStatus={(status) => setLoginStatus(status)}
                errorMessage={errorMessage} setErrorMessage={(errorMessage) => { setErrorMessage(errorMessage) }}
            />);
    } else {
        information = (
            <Login
                username={username} setUsername={(username) => setUsername(username)}
                message={message} setMessage={(message) => setMessage(message)}
                loginStatus={loginStatus} setLoginStatus={(status) => setLoginStatus(status)}
                errorMessage={errorMessage} setErrorMessage={(errorMessage) => { setErrorMessage(errorMessage) }}
            />);
    }


    useEffect(() => {
        if (loginStatus === "NO") {
            fetchLoginStatus()
                .then(chat => {
                    if (chat) {
                        setLoginStatus("YES");
                        setMessage(showMessages(chat));
                        setErrorMessage('');
                    }
                })
                .catch((err) => {
                    setErrorMessage(err.code);
                });
        }
    }, []);


    let styling = 'blank';
    if (message) {
        styling = 'info';
    }

    return (
        <div className="content">
            <div className={styling}>{message}</div>
            <div className="login-status">Logged In: {loginStatus}</div>
            {information}
        </div>
    );
};

export default Messages;
