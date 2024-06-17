import { INCREMENT_CART, DECREMENT_CART } from "./actions";


function cartReducer(state = [], action) {
  switch (action.type) {
    case INCREMENT_CART:
      if (state.find((product) => product.id === action.item.id)) {
        return state.map((product) =>
          product.id === action.item.id
            ? {
                ...product,
                amount: (product.amount += action.amount),
              }
            : product
        );
      } else {
        return [
          {
            name: action.item.name,
            price: parseFloat(action.item.price),
            amount: parseInt(action.amount),
            id: action.item.id,
          },
          ...state,
        ];
      }

    case DECREMENT_CART:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}

export default cartReducer;
