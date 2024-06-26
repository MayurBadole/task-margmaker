import { ADD_USER, REMOVE_USERS } from "../actions";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case REMOVE_USERS:
      return {
        ...state,
        users: state.users.filter((user) => !action.payload.includes(user.id)),
      };
    default:
      return state;
  }
};

export default usersReducer;
