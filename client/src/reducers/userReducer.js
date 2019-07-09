import {
  CREATE_USER,
  GET_USER,
  LOGOUT,
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK
} from '../actions/types';

const initialState = {
  user: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_USER: {
      return {
        ...state,
        user: payload
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: payload
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null
      };
    }
    case CREATE_TASK: {
      return {
        ...state,
        user: {
          ...state.user,
          tasks: [...state.user.tasks, payload]
        }
      };
    }
    case EDIT_TASK: {
      const tasks = [...state.user.tasks];
      const editedTasks = tasks.map(task => {
        if (task._id === payload._id) {
          return payload;
        }

        return task;
      });

      return {
        ...state,
        user: {
          ...state.user,
          tasks: [...editedTasks]
        }
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        user: {
          ...state.user,
          tasks: state.user.tasks.filter(task => task._id !== payload)
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
