import React, { useContext } from 'react';
import { LoginContext } from './LoginPage';
import { fetchLogout } from './services';

function LogoutButton() {
    const dispatch = useContext(LoginContext);

    const logout = () => {
        fetchLogout()
            .then(() => {
                dispatch({
                    type: 'logout',
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'logout',
                })
                dispatch({
                    type: 'error',
                    payload: { error: error }
                });
            });
    }

    return (
        <button className="logout-button" onClick={logout}> Logout </button>
    )
}

export default LogoutButton;