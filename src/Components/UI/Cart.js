import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import { CartContext } from "../Global/CartContext";
import ModalOverlay from "../Modal/Modal";
import { ModalContext } from "../Global/ModalContext";
import axios from "axios";

const Cart = () => {
  let newEmail = localStorage.getItem("email");
  let createNewEmail = newEmail.replace(/[@.]/g, "");

  const [show, setShow] = useState(false);
  const modalCtx = useContext(ModalContext);
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  const orderPlaceHandler = () => {
    setShow(true);
    dispatch({
      type: "PLACED",
    });
  };
  useEffect(() => {
    axios
      .get(
        `https://react-ecommerce-website-fc29d-default-rtdb.firebaseio.com/cart${createNewEmail}.json`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        if (data) {
          dispatch({
            type: "UPDATE_CART",
            cartData: data.shoppingCart,
            quantity: data.qty,
            price: data.totalPrice,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  }, []);

  return (
    <ModalOverlay show={modalCtx.show}>
      {show && (
        <div>
          <h3>your order is placed successfully</h3>
          <p>{`payable Amount:${totalPrice}`}</p>
        </div>
      )}
      {!show && (
        <table className={classes.table}>
          <thead style={{ border: "1px solid black" }}>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.length > 0 ? (
              shoppingCart.map((cart) => (
                <tr key={cart.id}>
                  <td>
                    <img src={cart.imageUrl} />
                  </td>
                  <td>{cart.title}</td>
                  <td>{cart.price}</td>

                  <td>{cart.qty}</td>
                  <td>
                    <div className={classes.btn}>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "INC",
                            id: cart.id,
                            cart: cart,
                          })
                        }
                      >
                        +
                      </button>
                      {cart.qty}
                      <button
                        onClick={() =>
                          dispatch({
                            type: "DEC",
                            id: cart.id,
                            cart: cart,
                          })
                        }
                      >
                        -
                      </button>
                    </div>
                    <button
                      style={{
                        backgroundColor: "Red",
                        border: "1px solid ",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        dispatch({
                          type: "DELETE",
                          id: cart.id,
                          cart: cart,
                        })
                      }
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <h1 style={{ color: "white" }}>your cart is Empty</h1>
            )}
          </tbody>
          <div>
            <h3>
              {shoppingCart.length > 0
                ? `Total Amount:${totalPrice}`
                : `Total  Amount:${0}`}
            </h3>
            <button onClick={() => orderPlaceHandler()}>Place Order</button>
          </div>
        </table>
      )}
    </ModalOverlay>
  );
};
export default Cart;
