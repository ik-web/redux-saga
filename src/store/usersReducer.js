const defaultState = {
  users: []
}

export const GET_USERS = 'GET_USERS';
export const ASYNC_GET_USERS = 'ASYNC_GET_USERS';

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }

    default:
      return state;
  }
};

export const getUsers = (payload) => ({type: GET_USERS, payload});
export const asyncGetUsers = () => ({type: ASYNC_GET_USERS});
