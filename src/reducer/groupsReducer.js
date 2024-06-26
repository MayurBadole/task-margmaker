import { ADD_GROUP } from "../actions";

const initialState = {
  groups: [],
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    default:
      return state;
  }
};

export default groupsReducer;
