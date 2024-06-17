/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useProducts from "../hooks/useProducts";

import { addItem } from "../redux/actions";
import { getProducts } from "../redux/selectors";

import AddtoCart from "./AddtoCart";

const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.75rem;
  margin-left: 1rem;
  gap: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #bebbbb;

  img {
    width: 112px;
    height: 112px;
    border-radius: 6px;
    border: 2px solid #db7f8e;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;

  h3 {
    margin: 8px;
    color: #04080f;
    font-weight: 500;
    font-size: 2em;
  }
  p {
    margin: 8px;
    margin-bottom: 16px;
    color: #04080f;
    align-self: flex-end;
  }
`;

const ItemDivInner = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemName = styled.h2`
  color: #04080f;
  text-shadow: 1px 1px 2px #3185fc;
  margin: 0 0 0.6rem 1rem;
`;

const PageTitle = styled.h1`
  color: #db7f8e;
  background-color: #eeeeff;
  text-shadow: 1px 1px 2px #04080f;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: center;
  margin: 0;
  font-size: 2.5rem;
  padding: 12px 0;
`;
function Item(props) {
  return (
    <>
      <ItemName>{props.data.name}</ItemName>
      <ItemDiv>
        <img src={props.data.photoUrl} alt=""></img>

        <ItemDivInner>
          <ItemInfo>
            <h3>${props.data.price}</h3>
            <p>Stock: {props.data.inStock}</p>
          </ItemInfo>
          <AddtoCart item={props.data} />
        </ItemDivInner>
      </ItemDiv>
    </>
  );
}

const ProductDiv = styled.div`
  background-color: #eeeeff;
`;
function ProductList() {
  const dispatch = useDispatch();
  const { products, isLoading } = useProducts();

  useEffect(() => {
    products.map((item) => dispatch(addItem(item)));
  }, [dispatch, products]);

  const storedProducts = useSelector(getProducts);

  return (
    <ProductDiv>
      <PageTitle>Products</PageTitle>
      {storedProducts.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </ProductDiv>
  );
}

export default ProductList;
