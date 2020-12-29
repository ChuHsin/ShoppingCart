import { showMessages } from './ShowMessages';
import React from 'react';
import {
    fetchLogout,
    fetchSendMessage,
} from './services';


const Loggedin = ({ inputMessage, setInputMessage, username, setUsername, setMessage, setLoginStatus, setErrorMessage }) => {

    return (

        <div className="input-area">
            <div className="login-username">Username: {username}</div>
            <input className="to-send" value={inputMessage} name="text" placeholder="Enter message to send"
                onChange={(e) => setInputMessage(e.target.value)} />
            <button onClick={() => {
                fetchSendMessage(inputMessage)
                    .then((response) => {
                        const messages = showMessages(response);
                        setMessage(messages);
                        setInputMessage('');
                        setErrorMessage('');
                    })
                    .catch((err) => {
                        setErrorMessage(err.code);
                    });
            }}>Send</button>
            <br/>
            <button onClick={() => {
                fetchLogout()
                    .then(() => {
                        setLoginStatus("NO");
                        setMessage('The Chat Room');
                        setUsername('');
                        setErrorMessage('');
                    })
                    .catch((err) => {
                        setErrorMessage(err.code);
                    });

            }}>Logout</button>
        </div>
    );
}

export default Loggedin;