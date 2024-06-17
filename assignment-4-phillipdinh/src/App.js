/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

import React from "react";
import { useSelector } from "react-redux";
import { getVisibilityFilter } from "./redux/selectors";
import { VisibilityFilters } from "./redux/actions";

import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import VisibilityFilterButtons from "./components/VisibilityFilterButtons";
const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700&display=swap");
  body {
    font-family: "Manrope", sans-serif;
    margin: 0;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #3185fc;
  padding: 0 6px;

  h1 {
    color: #eeeeff;
    margin: 0;
    margin-right: auto;
    padding: 6px;
  }
`;

function App() {
  const activeFilter = useSelector(getVisibilityFilter);

  return (
    <>
      <Global styles={globalStyles} />
      <Header>
        <h1>Penny Candy Store</h1>
        <VisibilityFilterButtons />
      </Header>
      {activeFilter === VisibilityFilters.SHOW_PRODUCTS && <ProductList />}
      {activeFilter === VisibilityFilters.SHOW_CART && <ShoppingCart />}
    </>
  );
}

export default App;
