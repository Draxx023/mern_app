import React from 'react';
import Error from './Error';

export default function RegisterForm(props) {
    let {
        handleSubmit,
        setUsername,
        setEmail,
        setPassword,
        setPasswordCheck,
        errorMessage,
        setError
    } = props.registerState;
    return (
        <div className='col-sm-7 bg-color align-self-center'>
            <div className="form-section">
                <div className="title">
                    <h3>
                        Créez un nouveau compte admin
                    </h3>
                </div>
                <div className="register-inner-form">
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="form-group form-box">
                            <input type="text" id="username" onChange={e => setUsername(e.target.value)} className='input-text' placeholder='Nom utilisateur' />
                            <i className='icon user'></i>
                        </div>
                        <div className="form-group form-box">
                            <input type="text" id="email" onChange={e => setEmail(e.target.value)} className='input-text' placeholder='Email' />
                            <i className='icon email'></i>
                        </div>
                        <div className="form-group form-box">
                            <input type="text" id="password" onChange={e => setPassword(e.target.value)} className='input-text' placeholder='Password' />
                            <i className='icon lock'></i>
                        </div>
                        <div className="form-group form-box">
                            <input type="text" id="passwordCheck" onChange={e => setPasswordCheck(e.target.value)} className='input-text' placeholder='Verifiez la password' />
                            <i className='icon lock'></i>
                        </div>
                        {
                            errorMessage && <Error errorMessage={errorMessage} clearError={() => { setError(undefined) }}></Error>
                        }
                        <div className="form-group">
                            <button className='btn primary-btn'>
                                Registrer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
