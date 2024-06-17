import { RECEIVE_PRODUCTS, DECREMENT_STOCK, INCREMENT_STOCK } from "./actions";

function productReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      if (state.find((product) => product.id === action.product.id)) {
        return [...state];
      }
      return [
        {
          id: action.product.id,
          name: action.product.name,
          price: parseFloat(action.product.price).toFixed(2),
          inStock: parseInt(action.product.inStock),
          photoUrl: action.product.photoUrl,
        },
        ...state,
      ];

    case DECREMENT_STOCK:
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              inStock: (item.inStock -= action.amount),
            }
          : item
      );

    case INCREMENT_STOCK:
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              inStock: (item.inStock += action.amount),
            }
          : item
      );

    default:
      return state;
  }
}

export default productReducer;
