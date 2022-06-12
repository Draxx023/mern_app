import * as actionType from './types';
import * as AuthService from '../components/services/auth.service';

// register action
export const registerAction = (payload) => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return AuthService.register(payload)
        .then(response => {
            dispatch({
                type: actionType.REGISTER_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.REGISTER_FAIL,
                payload: { err: error.message || "Registration failed." }
            })
            return Promise.reject(error);
        })
}

// login action

export const loginAction = (userCredentials) => (dispatch) => {
    return AuthService.login(userCredentials)
        .then(data => {
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                payload: data
            })
            return Promise.resolve(data);
        })
        .catch(error => {
            dispatch({
                type: actionType.LOGIN_FAIL,
                payload: { err: error.message || "Login failed." }
            })
            return Promise.reject(error)
        });
}

// logout action
export const logoutAction = () => (dispatch) => {
    const msg = AuthService.logout()

    dispatch({
        type: actionType.LOGOUT,
        payload: { msg }
    })

    return Promise.resolve(msg)

}

// create user action
export const createAction = (payload) => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return AuthService.create(payload)
        .then(response => {
            dispatch({
                type: actionType.CREATE_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.CREATE_FAIL,
                payload: { err: error.message || "Creation failed." }
            })
            return Promise.reject(error);
        })
}

export const showAction = () => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return AuthService.show()
        .then(response => {
            dispatch({
                type: actionType.SHOW_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.SHOW_FAIL,
                payload: { err: error.message || "Show failed." }
            })
            return Promise.reject(error);
        })
}

export const getUserInfoAction = (id) => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return AuthService.show(id)
        .then(response => {
            dispatch({
                type: actionType.GET_INFO_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.GET_INFO_FAIL,
                payload: { err: error.message || "Get user info failed." }
            })
            return Promise.reject(error);
        })
}

export const updateAction = (id, body) => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return AuthService.update(id, body)
        .then(response => {
            dispatch({
                type: actionType.UPDATE_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.UPDATE_FAIL,
                payload: { err: error.message || "Update failed." }
            })
            return Promise.reject(error);
        })
}
export const deleteAction = (id) => (dispatch) => {
    // make sure dispatch is asynchronous
    // dispatch should be implemented in an action not into the component
    // use redux-thunk (in store.js) to do that
    return AuthService.deleteService(id)
        .then(response => {
            dispatch({
                type: actionType.DELETE_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error => {
            dispatch({
                type: actionType.DELETE_FAIL,
                payload: { err: error.message || "Update failed." }
            })
            return Promise.reject(error);
        })
}