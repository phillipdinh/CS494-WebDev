/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart, removeStock } from "../redux/actions";

const AddCartForm = styled.form`
  display: flex;
  flex-direction: row;
  margin: 8px;
`;

const CartButton = styled.button`
  color: #04080f;
  background-color: #db7f8e;
  border-radius: 4px;
  border-color: #db7f8e;
  padding: 6px;
  margin-left: 8px;
  font-size: 1.2em;

  &:not(:disabled):hover {
    background-color: #e03d58;
  }
`;

const CartInput = styled.input`
  color: dimgray;
  border-radius: 4px;
  border-color: whitesmoke;
  background-color: rgba(255, 255, 255, 0.3);
  max-width: 3.5em;
  font-size: 1.2em;
`;

function AddtoCart(props) {
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch();

  const [showWarning, setShowWarning] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  useEffect(() => {
    if (props.item.inStock === 0) {
      setOutOfStock(true);
    } else {
      setOutOfStock(false);
    }
  }, [props.item.inStock]);

  return (
    <AddCartForm
      onSubmit={(e) => {
        const q = parseInt(quantity);
        e.preventDefault();
        if (props.item.inStock < q) {
          setShowWarning(true);
        }
        // Add to Cart
        else {
          console.log("Added", props.item.name, "to Cart: ", q);
          dispatch(addCart(props.item, q));
          dispatch(removeStock(props.item.id, q));
          setQuantity("");
        }
      }}
    >
      <CartInput
        type="number"
        min="1"
        placeholder="0"
        step="1"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
          setShowWarning(false);
        }}
      />
      <CartButton disabled={outOfStock || quantity === ""}>
        Add to Cart
      </CartButton>
      {showWarning && <p style={{ color: "red" }}>Not enough in Stock</p>}
    </AddCartForm>
  );
}

export default AddtoCart;
