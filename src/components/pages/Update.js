import React, { useState, useEffect } from 'react'
import UpdateForm from '../imports/UpdateForm';
import Header from '../imports/Header';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getUserInfoAction, updateAction } from '../../container/actions';

export default function Update() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('x-access-token')) {
            navigate('/login');
        }
    }, [navigate]);

    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const [user, setUserData] = useState({ user: [] });

    const id = searchParams.get("id");

    const getData = dispatch(getUserInfoAction(id));
    getData
        .then(data => {
            setUserData({ user: data });
        }).catch(error => {
            setError(error.data.err);
        });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [errorMessage, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let updateUser = {
            "name": "",
            "email": "",
            "gender": "",
            "status": ""
        };

        (name === '') ? updateUser.name = user.user.name : updateUser.name = name;
        (email === '') ? updateUser.email = user.user.email : updateUser.email = email;
        (gender === '') ? updateUser.gender = user.user.gender : updateUser.gender = gender;
        (status === '') ? updateUser.status = user.user.status : updateUser.status = status;

        const validate = dispatch(updateAction(id, updateUser));
        validate.then(data => {
            alert("Mise à jour des données avec succès!");
            navigate("/");
        }).catch(error => {
            setError(error.data.err);
        });
    };

    let states = {
        handleSubmit,
        id,
        setName,
        setEmail,
        setGender,
        setStatus,
        errorMessage,
        setError
    };

    return (
        <div id="bg">
            <Header></Header>
            <main id="site-main">
                <div className="container">
                    <UpdateForm states={states} data={user.user}></UpdateForm>
                </div>
            </main>
        </div>
    )
}
