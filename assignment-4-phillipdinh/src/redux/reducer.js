import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import visibilityReducer from "./visibilityReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  visibilityFilter: visibilityReducer,
});

export default rootReducer;
