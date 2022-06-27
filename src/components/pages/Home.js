import React, { useState, useEffect } from 'react'
import Header from '../imports/Header';
import HomeTable from '../imports/HomeTable';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showAction, deleteAction } from '../../container/actions';


export default function Home() {
    const navigate = useNavigate();
    const user = useSelector(state => state.isLoggedIn);
    const route = () => {
        const token = localStorage.getItem('x-access-token')
        return token ? true : false
    }
    useEffect(() => {
        if (!route()) {
            navigate('/login')
        }
    }, [route, navigate])

    const dispatch = useDispatch();

    const [usersData, setUsersData] = useState({ users: [] });
    const home = dispatch(showAction());
    home
        .then(data => {
            setUsersData({ users: data });
        }).catch(error => {
            alert(error.data.err);
        });

    const handleDelete = (event, id) => {
        event.preventDefault();
        if (window.confirm("Est-ce que vous voulez vraiment supprimer cet utilisateur?")) {
            const validate = dispatch(deleteAction(id));
            validate.then((data) => {
                alert("Utilisateur supprimé.");
                navigate('/');
            }).catch(error => {
                alert(error.data.err);
            });
        }
    }
    return (
        <div id="bg">
            <Header></Header>
            <main id="site-main">
                <div className="container">
                    <HomeTable handler={handleDelete} data={usersData.users}></HomeTable>
                </div>
            </main>
        </div>
    )
}
