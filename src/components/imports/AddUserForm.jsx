import React from 'react';
import Error from './Error';

export default function AddUserForm(props) {
    let {
        handleSubmit,
        setName,
        setEmail,
        setGender,
        setStatus,
        errorMessage,
        setError
    } = props.addUserState;
    return (
        <form method="POST" id="add_user" onSubmit={handleSubmit}>
            < div className="new_user" >
                <div className="form-group">
                    <label htmlFor='Name' className="label-light">Nom Complet</label>
                    <input type="hidden" name="id" value="" />
                    <input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="Mark Stoenis" />
                </div>
                <div className="form-group">
                    <label htmlFor='Email' className="label-light">Email</label>
                    <input type="text" name="email" onChange={e => setEmail(e.target.value)} placeholder="example@test.com" />
                </div>
                <div className="form-group">
                    <label htmlFor='gender' className="label-light">Gender</label>
                    <div className="radio inline">
                        <input type="radio" id="radio-2" name="gender" onChange={e => setGender(e.target.value)} value="Male" />
                        <label htmlFor="radio-2" className="radio-label">Homme</label>
                    </div>
                    <div className="radio inline">
                        <input type="radio" id="radio-3" name="gender" onChange={e => setGender(e.target.value)} value="Female" />
                        <label htmlFor="radio-3" className="radio-label">Femme</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="status" className="label-light">Status</label>
                    <div className="radio inline">
                        <input type="radio" id="radio-4" onChange={e => setStatus(e.target.value)} name="status" value="Active" />
                        <label htmlFor="radio-4" className="radio-label">
                            Actif
                        </label>
                    </div>
                    <div className="radio inline">
                        <input type="radio" id="radio-5" onChange={e => setStatus(e.target.value)} name="status" value="Inactive" />
                        <label htmlFor="radio-5" className="radio-label">
                            Inactif
                        </label>
                    </div>
                </div>
                {
                    errorMessage && <Error errorMessage={errorMessage} clearError={() => { setError(undefined) }}></Error>
                }
                <div className="form-group">
                    <button className="btn update">Sauvegarder</button>
                </div>
            </div >
        </form >
    )
}
