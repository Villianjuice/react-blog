import produce from 'immer' 
import { SET_CARDS, GET_USER } from "./actionTypes"

const initialState = {
  cards: [],
  currentUser: null
}
console.log(produce);

export const cards = produce((state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      state.cards.push(action.payload)
      break;
    case GET_USER:
      const findUser = state.cards.find(card => card.id === action.payload);
      state.currentUser = findUser
      break
    default:
      return state
  }
  
})