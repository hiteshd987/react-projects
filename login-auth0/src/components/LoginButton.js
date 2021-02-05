import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// this.HandleClick = () => {
//     loginWithRedirect();
// }

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <div class="login-section">
                <input type="text" />
                <input type="text" />
                <button onClick={() => loginWithRedirect()}>
                Log In
                </button>
            </div>
        )
    )
}

export default LoginButton

// {connection: '[Connection name]'}  google-oauth2