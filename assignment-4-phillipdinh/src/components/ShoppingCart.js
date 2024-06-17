/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../redux/selectors";
import { removeCart, addStock } from "../redux/actions";

function itemCost(price, amount) {
  const unitPrice = parseFloat(price);
  const num = Number(amount);

  return (unitPrice * num).toFixed(2);
}

const RemoveCartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 6px 3px 6px;
  color: #04080f;
  border: 1px solid black;
  border-radius: 4px;
  height: 1rem;
  align-self: flex-end;
  margin-bottom: 6px;

  &:hover {
    background-color: #a9a9a9;
  }
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bebbbb;
  margin: 6px;

  h2 {
    color: #04080f;
    text-shadow: 1px 1px 2px #3185fc;
    margin-left: 2.4em;
  }
`;

const ItemDivInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  b {
    margin: 6px 0;
    font-size: 20px;
  }

  p {
    margin: 6px 2px;
    font-size: 20px;
  }
`;
function Item(props) {
  return (
    <>
      <ItemDiv>
        <h2>{props.data.name}</h2>
        <ItemDivInner>
          <RemoveCartBtn
            onClick={() => props.onClick(props.data.id, props.data.amount)}
          >
            x
          </RemoveCartBtn>
          <TextWrapper>
            <b>${props.data.price}</b>
            <p>/unit</p>
          </TextWrapper>
          <TextWrapper>
            <p>Qty. </p>
            <b>{props.data.amount}</b>
          </TextWrapper>
          <TextWrapper>
            <p>Cost: </p>
            <b>${itemCost(props.data.price, props.data.amount)}</b>
          </TextWrapper>
        </ItemDivInner>
      </ItemDiv>
    </>
  );
}

function totalCost(cart) {
  let total = 0.0;

  for (let i = 0; i < cart.length; i++) {
    const itemTotal = itemCost(cart[i].price, cart[i].amount);

    total += parseFloat(itemTotal);
  }
  return parseFloat(total).toFixed(2);
}

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

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #eeeeff;
  padding-left: 12px;
`;

const CartTotal = styled.p`
  font-size: 32px;
  margin: 0;
  margin-left: 2em;
  font-weight: 600;
`;
const Total = styled.p`
  font-size: 16px;
  margin-bottom: 2px;
  font-weight: 400;
`;
const CheckoutBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 10rem;
  border: 1px solid black;
  border-radius: 6px;
  font-size: 24px;
  color: #eeeeff;
  text-shadow: 2px 2px 2px #04080f;
  background-color: #db7f8e;
  align-self: flex-end;
  margin-left: 1.5em;
  margin-bottom: 8px;

  &:hover {
    background-color: #e03d58;
  }
`;
function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCartItems);

  function handleClick(id, amount) {
    dispatch(addStock(id, amount));
    dispatch(removeCart(id));
  }

  function handleCheckout() {
    cart.map((item) => dispatch(removeCart(item.id)));
  }

  return (
    <>
      <PageTitle>Shopping Cart</PageTitle>
      <CartDiv>
        {cart.map((item) => (
          <Item key={item.id} data={item} onClick={handleClick} />
        ))}
        <CheckoutWrapper>
          <CartTotal>
            <Total>Total</Total>${totalCost(cart)}
          </CartTotal>

          {cart.length > 0 && (
            <CheckoutBtn onClick={handleCheckout}>Checkout</CheckoutBtn>
          )}
        </CheckoutWrapper>
      </CartDiv>
    </>
  );
}

export default ShoppingCart;
