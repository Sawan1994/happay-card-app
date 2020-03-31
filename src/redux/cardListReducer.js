import { ADD_CARDS, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
  cardsList: [],
  selectedCards: []
};

const cardListReducer = (state = initialState, action) => {
  let selectedCards = [...state.selectedCards];

  switch (action.type) {
    case ADD_CARDS:
      return {
        ...state,
        cardsList: [...action.cardsList]
      };

    case ADD_TO_CART:
      const current = selectedCards.find(card => card.id === action.id);

      if (current !== undefined) {
        /**
         * id card is already added in the cart, find the card and increment the quantity
         */
        selectedCards = selectedCards.map(card =>
          card.id === action.id
            ? { ...card, quantity: card.quantity + 1 }
            : { ...card }
        );
      } else {
        /**
         * if card does not exist in cart, then make entry for the card and initiate the quantity to 1
         */
        selectedCards = selectedCards.concat({
          id: action.id,
          quantity: 1,
          ...state.cardsList.find(card => card.id === action.id)
        });
      }

      return {
        ...state,
        selectedCards: [...selectedCards]
      };

    case REMOVE_FROM_CART:
      selectedCards = selectedCards
        .map(card => {
          if (card.id !== action.id) {
            return { ...card };
          }

          if (card.quantity === 1) {
            return null;
          }

          return {
            ...card,
            quantity: card.quantity - 1
          };
        })
        .filter(card => card !== null);

      return {
        ...state,
        selectedCards: [...selectedCards]
      };

    default:
      return state;
  }
};

export default cardListReducer;
