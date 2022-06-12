import React, { useState, useEffect } from 'react';
import Header from '../imports/Header';
import AddUserForm from '../imports/AddUserForm';
import { createAction } from '../../container/actions';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


export default function Add() {

    const user = useSelector(state => state.isLoggedIn);
    const navigate = useNavigate();

    const route = () => {
        const token = localStorage.getItem('x-access-token');
        return token ? true : false;
    }

    useEffect(() => {
        if (!route()) {
            navigate('/login');
        }
    }, [route, navigate]);

    // hook variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [errorMessage, setError] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name,
            email,
            gender,
            status
        };
        const validate = dispatch(createAction(newUser));
        validate.then(data => {
            alert("Data inserted successfully!");
        }).catch(error => {
            setError(error.data.err);
        });
    };
    let addUserData = {
        handleSubmit,
        setName,
        setEmail,
        setGender,
        setStatus,
        errorMessage,
        setError
    };
    return (
        <>
            <Header></Header>
            <main id="site-main">
                <div className="container">
                    <div className="box-nav d-flex-justify-between">
                        <div className="filter">
                            <a href="/" className="fas fa-angle-double-left">Tous les utilisateurs</a>
                        </div>
                    </div>
                    <div className="form-title text-center">
                        <h2 className="text-dark">Nouveau utilisateur</h2>
                        <span className="text-light">Utilisez le formulaire suivant pour créer un nouveau utlisateur</span>
                    </div>
                    <AddUserForm addUserState={addUserData}></AddUserForm>
                </div>
            </main>
        </>
    )
}

