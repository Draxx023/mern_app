import axios from 'axios';

const baseURL = "http://localhost:4000/api";

// register request
const register = (newUser) => {
    // POST request on http://localhost:4000/api/register
    return axios.post(`${baseURL}/register`, newUser)
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}

// login request
const login = (userCredentials) => {
    return axios.post(`${baseURL}/login`, userCredentials)
        .then(response => {
            if (response.data.token) {
                localStorage.setItem("x-access-token", response.data.token);
            }
            return Promise.resolve(response.data);
        })
        .catch(error => {
            return Promise.reject(error.response.data);
        })
}

// logout service
const logout = () => {
    localStorage.removeItem('x-access-token')
    return { msg: "Logout Successfully...!" }
}

const create = (newUser) => {
    // POST request on http://localhost:4000/api/add-user
    return axios.post(`${baseURL}/add-user`, newUser)
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}

const show = (id) => {
    // GET request on http://localhost:4000/api/users
    return axios.get(`${baseURL}/users`, { params: { id } })
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}

const update = (id, userData) => {
    // PUT request on http://localhost:4000/api/update-user/id
    return axios.put(`${baseURL}/update-user/${id}`, userData)
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}

const deleteService = (id) => {
    // DELETE request on http://localhost:4000/api/users
    return axios.delete(`${baseURL}/users/${id}`)
        .then(response => {
            if (response) {
                return Promise.resolve(response);
            }
        })
        .catch(error => {
            return Promise.reject(error.response);
        });
}


export {
    register,
    login,
    logout,
    create,
    show,
    update,
    deleteService
}