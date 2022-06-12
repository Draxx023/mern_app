import React, { useState, useEffect } from 'react'
import Header from '../imports/Header';
import HomeTable from '../imports/HomeTable';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showAction, deleteAction } from '../../container/actions';


export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('x-access-token')) {
            navigate('/login');
        }
    }, [navigate]);

    const dispatch = useDispatch();

    const [usersData, setUsersData] = useState({ users: [] });
    const home = dispatch(showAction());
    home
        .then(data => {
            setUsersData({ users: data });
        }).catch(error => {
            alert(error.data.err);
        });

    const handleDelete = (event) => {
        event.preventDefault();
        var id = event.target.dataset.remove;
        if (window.confirm("Do you really want to delete this record?")) {
            const validate = dispatch(deleteAction(id));
            validate.then((data) => {
                alert("Data deleted successfully.");
                navigate('/');
            }).catch(error => {
                alert(error.data.err);
            });
        }
    }
    return (
        <html>
            <Header></Header>
            <main id="site-main">
                <div className="container">
                    <HomeTable handler={handleDelete} data={usersData.users}></HomeTable>
                </div>
            </main>
        </html>
    )
}
