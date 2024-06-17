////////////// Product List //////////////////////
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const DECREMENT_STOCK = "DECREMENT_STOCK";
export const INCREMENT_STOCK = "INCREMENT_STOCK";

export function addItem(product) {
  return { type: RECEIVE_PRODUCTS, product };
}

export function addStock(id, amount) {
  return { type: INCREMENT_STOCK, id, amount };
}

export function removeStock(id, amount) {
  return { type: DECREMENT_STOCK, id, amount };
}

///////////// Cart ///////////////////////////////
export const INCREMENT_CART = "RECEIVE_CART";
export const DECREMENT_CART = "DECREMENT_CART";

export function addCart(item, amount) {
  return { type: INCREMENT_CART, item, amount };
}

export function removeCart(id) {
  return { type: DECREMENT_CART, id };
}

//////////// Visibility //////////////////////////
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const VisibilityFilters = {
  SHOW_PRODUCTS: "SHOW_PRODUCTS",
  SHOW_CART: "SHOW_CART",
};

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
