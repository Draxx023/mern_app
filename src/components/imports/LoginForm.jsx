import React, { useState } from 'react'
import Error from './Error'

export default function LoginForm(props) {
    let {
        handleSubmit,
        setEmail,
        setPassword,
        errorMessage,
        setError
    } = props.loginState;
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
    return (
        <div className="col-sm-7 bg-color align-self-center form-section">
            <div className="title">
                <h3>Connetez vous à votre compte</h3>
            </div>
            <div className="login-inner-form">
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="form-group form-box">
                        <input type="text" id="email" onChange={e => setEmail(e.target.value)} className="input-text" placeholder="Email" />
                        <i className='icon email'></i>
                    </div>
                    <div className="form-group form-box">
                        <i className='icon lock'></i>
                        <input type={passwordShown ? "text" : "password"} id="password" onChange={e => setPassword(e.target.value)} className="input-text" placeholder="Password" />
                        <button type="button" className='show-pass ' onClick={togglePassword}><i className={passwordShown ? "icon2 show" : "icon2 hide"} ></i></button>
                    </div>
                    {
                        errorMessage && <Error errorMessage={errorMessage} clearError={() => { setError(undefined) }}></Error>
                    }
                    <div className="form-group">
                        <button className="btn primary-btn">Connexion</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
