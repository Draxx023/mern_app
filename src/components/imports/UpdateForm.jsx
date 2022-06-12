import React from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';

export default function UpdateForm(props) {
    let { handleSubmit,
        id,
        setName,
        setEmail,
        setGender,
        setStatus,
        errorMessage,
        setError
    } = props.states;
    let tmpData = props.data;
    return (
        <main id="site-main">
            <div className="container">
                <div className="box-nav d-flex-justify-between">
                    <div className="filter">
                        <Link to="/" className="fas text-blue fa-angle-double-left">Tous les utilisateurs</Link>
                    </div>
                </div>
                <div className="form-title text-center">
                    <h2 className="text-dark">Mettre à jour les données utilisateur</h2>
                    <span className="label-light">Utilisez le formulaire ci-dessous pour mettre à jour les données de cet utilisateur</span>
                </div>

                <form method="POST" id="update_user" onSubmit={handleSubmit}>
                    <div className="new_user">
                        <div className="form-group">
                            <label htmlFor="Name" className="label-light">Nom Complet</label>
                            <input type="hidden" name="id" value={id} />
                            <input type="text" name="name" onChange={e => setName(e.target.value)} defaultValue={tmpData.name} placeholder="Lorem Ipsum" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email" className="label-light">Email</label>
                            <input type="text" name="email" onChange={e => setEmail(e.target.value)} defaultValue={tmpData.email} placeholder="dolor@amet.si" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender" className="label-light">Sexe</label>
                            <div className="radio inline">
                                <input type="radio" id="radio-2" onChange={(e) => setGender(e.target.value)} name="gender" value="Male" />
                                <label htmlFor="radio-2" className="radio-label">Homme</label>
                            </div>
                            <div className="radio inline">
                                <input type="radio" id="radio-3" onChange={(e) => setGender(e.target.value)} name="gender" value="Female" />
                                <label htmlFor="radio-3" className="radio-label">Femme</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status" className="label-light">Status</label>
                            <div className="radio inline">
                                <input type="radio" id="radio-4" name="status" value="Active" onChange={e => setStatus(e.target.value)} />
                                <label htmlFor="radio-4" className="radio-label">Actif</label>
                            </div>
                            <div className="radio inline">
                                <input type="radio" id="radio-5" name="status" value="Inactive" onChange={e => setStatus(e.target.value)} />
                                <label htmlFor="radio-5" className="radio-label">Inactif</label>
                            </div>
                        </div>
                        {
                            errorMessage && <Error errorMessage={errorMessage} clearError={() => { setError(undefined) }}></Error>
                        }
                        <div className="form-group">
                            <button type="submit" className="btn update">Sauvegarder</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}
