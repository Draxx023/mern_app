import React, { useState } from 'react'
import BaseLogin from '../imports/BaseLogin';
import LoginForm from '../imports/LoginForm';
import { loginAction } from '../../container/actions';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useStore } from 'react-redux';
import { registerAction } from '../../container/actions';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const store = useStore();

    // handler for form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const userCredentials = {
            email,
            password
        }
        //const userCredential = { email: "dmin@outlook.com", password: "admin123" };
        const login = dispatch(loginAction(userCredentials));
        login
            .then(data => {
                navigate('/');
            })
            .catch(error => {
                setError(error.err);
            });
    }
    return (
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <BaseLogin />
                    <LoginForm loginState={{ handleSubmit, setEmail, setPassword, errorMessage, setError }} />
                </div>
            </div>
        </div>
    )
}
