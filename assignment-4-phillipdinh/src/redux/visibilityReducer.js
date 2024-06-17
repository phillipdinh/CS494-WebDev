import { SET_VISIBILITY_FILTER, VisibilityFilters } from "./actions";

function visibilityReducer(state = VisibilityFilters.SHOW_PRODUCTS, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default visibilityReducer;
