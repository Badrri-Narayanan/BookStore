import React, {useState} from 'react';
import InputBox from '../components/input-box/input-box.component';

import './login-page.styles.css';

import {login} from '../data/data'

const LoginPage = () => {
    const [loginCredentials, setLoginCredentials] = useState({
        email: '',
        password: '',
    })

    const {email, password} = loginCredentials;
    const handleInputChange = (event) => {
        const {id, value} = event.target;
        setLoginCredentials({
            ...loginCredentials,
            [id] : value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email === login[0].username && password === login[0].password) {
            console.log("admin")
        } else if(email === login[1].username && password === login[1].password) {
            console.log("guest")
        } else {
            console.log("invalid credentials")
        }
    }

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <InputBox 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    id="email"
                    onChange={(event) => handleInputChange(event)} 
                required/>
                <InputBox 
                    type="password" 
                    placeholder="Password"
                    id="password" 
                    value={password} 
                    onChange={(event) => handleInputChange(event)} 
                required/>

                <div className="login-options">
                    <p><input type="checkbox" />Remember me</p>
                    <a href="/">Forgot Password?</a>
                </div>
                <div className="login-options">
                    <input type="button" className="btn btn-default" value="Cancel" />
                    <input type="submit" className="btn btn-primary" value="Login" />
                </div>
            </form>
        </div>
    );
}

export default LoginPage;