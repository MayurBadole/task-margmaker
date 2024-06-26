import { nanoid } from 'nanoid';

export const ADD_USER = 'ADD_USER';
export const ADD_GROUP = 'ADD_GROUP';
export const REMOVE_USERS = 'REMOVE_USERS';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: { id: nanoid(), ...user },
});

export const addGroup = (group) => ({
  type: ADD_GROUP,
  payload: group,
});

export const removeUsers = (userIds) => ({
  type: REMOVE_USERS,
  payload: userIds,
});
