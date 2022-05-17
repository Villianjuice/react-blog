import { GET_USER, SET_CARDS } from './actionTypes';

export const setCards = ( cards ) => ({
  type: SET_CARDS,
  payload: cards
});

export const getUser = (id) => ({
  type: GET_USER,
  payload: id
})
