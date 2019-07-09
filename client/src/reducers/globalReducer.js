import {
  TOGGLE_AUTH_SPINNER,
  TOGGLE_MODAL_TASKS_SPINNER,
  TOGGLE_TASKS_SPINNER
} from '../actions/types.js';

const initialState = {
  isAuthLoading: false,
  isTasksLoading: false,
  isModalTaskLoading: false
};

const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_AUTH_SPINNER: {
      return {
        ...state,
        isAuthLoading: payload
      };
    }
    case TOGGLE_MODAL_TASKS_SPINNER: {
      return {
        ...state,
        isModalTaskLoading: payload
      };
    }
    case TOGGLE_TASKS_SPINNER: {
      return {
        ...state,
        isTasksLoading: payload
      };
    }
    default: {
      return state;
    }
  }
};

export default globalReducer;
