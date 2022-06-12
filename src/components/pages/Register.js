import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import BaseLogin from '../imports/BaseLogin';
import RegisterForm from '../imports/RegisterForm';
import { registerAction } from '../../container/actions';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    // hook variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [errorMessage, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // event handler on form submission 
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent defualt behaviour of this element
        const newUser = {
            username,
            email,
            password,
            passwordCheck
        }
        // const userPayload = { username: "admin", email: "admin@outlook.com", password: "admin123", passwordCheck: "admin123" };
        const validate = dispatch(registerAction(newUser));
        validate.then(data => {
            navigate('/login');
        }).catch(error => {
            setError(error.data.err);
        });
    };

    let registerData = {
        handleSubmit,
        setUsername,
        setEmail,
        setPassword,
        setPasswordCheck,
        errorMessage,
        setError
    };

    return (
        <div id="login">
            <div className="container">
                <div className="row login-box">
                    <BaseLogin />
                    <RegisterForm registerState={registerData} />
                </div>
            </div>
        </div>
    );
}
