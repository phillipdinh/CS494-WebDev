import styled from "@emotion/styled/macro";
import { useDispatch, useSelector } from "react-redux";

import { getVisibilityFilter, getCartItems } from "../redux/selectors";
import { setVisibilityFilter, VisibilityFilters } from "../redux/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const VisibilityFiltersContainer = styled.div`
  margin: 10px 0;

  button {
    background-color: #3185fc;
    font-size: 28px;
    border: none;
    color: #eeeeff;
  }
`;

function VisibilityFilterButtons() {
  const activeFilter = useSelector(getVisibilityFilter);
  const dispatch = useDispatch();
  const cart = useSelector(getCartItems);

  return (
    <VisibilityFiltersContainer>
      <button
        disabled={activeFilter === VisibilityFilters.SHOW_PRODUCTS}
        onClick={() => {
          dispatch(setVisibilityFilter(VisibilityFilters.SHOW_PRODUCTS));
        }}
      >
        Products
      </button>
      <button
        disabled={activeFilter === VisibilityFilters.SHOW_CART}
        onClick={() => {
          dispatch(setVisibilityFilter(VisibilityFilters.SHOW_CART));
        }}
      >
        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#EEEEFF" }} /> (
        {cart.length})
      </button>
    </VisibilityFiltersContainer>
  );
}

export default VisibilityFilterButtons;
