import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeTable(props) {
    let users = props.data;
    let handleDelete = props.handler;
    return (
        <div className="box-nav d-flex-justify-between" >
            <Link to="/add-user" className="border-shadow">
                <span className="text-gradient">
                    <span className="span">Nouveau utilisateur</span>
                    <i className="fa-solid fa-user"></i>
                </span>
            </Link>
            <form action="/" method="POST">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nom Complet</th>
                            <th>Email</th>
                            <th>Sexe</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td key={"index" + user._id}>{index + 1}</td>
                                <td key={"name" + user._id}>{user.name}</td>
                                <td key={"email" + user._id}>{user.email}</td>
                                <td key={"gender" + user._id}>{user.gender === "Male" ? 'Homme' : 'Femme'}</td>
                                <td key={"status" + user._id}>{user.status === "Active" ? 'Actif' : 'Inactif'}</td>
                                <td key={"links" + user._id}>
                                    <Link to={{ pathname: `/update-user?id=${user._id}` }} className="btn border-shadow update">
                                        <span className="text-gradient">
                                            <i className="fas fa-pencil-alt"></i>
                                        </span>
                                    </Link>
                                    <Link to="#" className="btn border-shadow delete" onClick={handleDelete} data-remove={user._id}>
                                        <span className="text-gradient">
                                            <i className="fas fa-times"></i>
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </div >
    )
}
