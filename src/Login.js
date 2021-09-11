/* eslint-disable no-empty-pattern */
import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionType } from './reducer'

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionType.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" alt="" />
                <div className="login__text">
                    <h1>Sign in to whatsApp</h1>
                    <Button  onClick={signIn}>
                        Sign in with google

                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Login
