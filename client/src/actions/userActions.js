import axios from 'axios';

import { CREATE_USER, GET_USER, LOGOUT, TOGGLE_AUTH_SPINNER } from './types';
import { SERVER_URL } from '../config';

export const createUserAction = userData => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: TOGGLE_AUTH_SPINNER,
      payload: true
    });

    axios
      .post(`${SERVER_URL}/api/user`, userData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(data => {
        if (data.data.errors) {
          resolve(data);
        } else {
          dispatch({
            type: CREATE_USER,
            payload: data.data
          });
        }
        resolve(data);

        dispatch({
          type: TOGGLE_AUTH_SPINNER,
          payload: false
        });
      })
      .catch(err => {
        console.log(err);

        dispatch({
          type: TOGGLE_AUTH_SPINNER,
          payload: false
        });
        reject(err);
      });
  });
};

export const getUserAction = email => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${SERVER_URL}/api/user/${email}`)
      .then(user => {
        dispatch({
          type: GET_USER,
          payload: user.data
        });
        resolve(user.data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export const loginAction = loginData => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: TOGGLE_AUTH_SPINNER,
      payload: true
    });

    axios
      .post(`${SERVER_URL}/api/login`, loginData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(login => {
        resolve(login);

        if (!login.data.errors) {
          dispatch({
            type: GET_USER,
            payload: login.data
          });
        }
        dispatch({
          type: TOGGLE_AUTH_SPINNER,
          payload: false
        });
      })
      .catch(err => {
        dispatch({
          type: TOGGLE_AUTH_SPINNER,
          payload: false
        });

        reject(err);
      });
  });
};

export const logoutAction = user => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${SERVER_URL}/api/logout`, { ...user })
      .then(user => {
        if (user.data.email) {
          resolve(user.data);

          dispatch({
            type: LOGOUT
          });
        } else {
          console.log('Error while logout');
          reject('Error while logout');
        }
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};
