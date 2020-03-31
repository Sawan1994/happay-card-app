import {
  ADD_CARDS,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../../redux/actionTypes";

export const addCardToList = cardsList => ({
  type: ADD_CARDS,
  cardsList: cardsList
});

export const addToCart = id => ({
  type: ADD_TO_CART,
  id: id
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id: id
});
