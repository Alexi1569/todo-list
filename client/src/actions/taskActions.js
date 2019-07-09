import axios from 'axios';

import {
  CREATE_TASK,
  TOGGLE_MODAL_TASKS_SPINNER,
  DELETE_TASK,
  TOGGLE_TASKS_SPINNER,
  EDIT_TASK
} from './types';
import { SERVER_URL } from '../config';

export const createTaskAction = createTaskData => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: TOGGLE_MODAL_TASKS_SPINNER,
      payload: true
    });

    axios
      .post(`${SERVER_URL}/api/task`, createTaskData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(result => {
        if (result.data.errors) {
          resolve(result.data);
        } else {
          dispatch({
            type: CREATE_TASK,
            payload: result.data
          });

          resolve(result.data);
        }

        dispatch({
          type: TOGGLE_MODAL_TASKS_SPINNER,
          payload: false
        });
      })
      .catch(err => {
        console.log(err);
        reject(err);

        dispatch({
          type: TOGGLE_MODAL_TASKS_SPINNER,
          payload: false
        });
      });
  });
};

export const deleteTaskAction = id => dispatch => {
  dispatch({
    type: TOGGLE_TASKS_SPINNER,
    payload: true
  });

  axios
    .delete(`${SERVER_URL}/api/task/${id}`)
    .then(result => {
      if (result.data.errors) {
        console.log(result.data.errors);
      } else {
        dispatch({
          type: DELETE_TASK,
          payload: result.data._id
        });
      }
      dispatch({
        type: TOGGLE_TASKS_SPINNER,
        payload: false
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: TOGGLE_TASKS_SPINNER,
        payload: false
      });
    });
};

export const editTaskAction = editTaskData => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: TOGGLE_MODAL_TASKS_SPINNER,
      payload: true
    });

    axios
      .put(`${SERVER_URL}/api/task`, editTaskData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(result => {
        if (!result.data.errors) {
          dispatch({
            type: EDIT_TASK,
            payload: result.data
          });
        }
        resolve(result.data);

        dispatch({
          type: TOGGLE_MODAL_TASKS_SPINNER,
          payload: false
        });
      })
      .catch(err => {
        dispatch({
          type: TOGGLE_MODAL_TASKS_SPINNER,
          payload: false
        });

        reject(err);
        console.log(err);
      });
  });
};
