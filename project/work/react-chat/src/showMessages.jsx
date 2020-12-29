import React from 'react';

export function showMessages(response) {
    return (
        response.messages.map(message => (
            <li>
                <div className="message">
                    <div className="meta-info">
                        <div className="sender-info">
                            <span className="username">{response.users[message.sender].username}</span>

                        </div>
                        <div className="message-info">
                            <span className="timestamp">{message.timestamp}</span>
                        </div>
                    </div>
                    <p className="message-text">{message.text}</p>
                </div>
            </li>)));
}