import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { CartContext } from "../Global/CartContext";

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);

  return (
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
          <h1>your cart is Empty</h1>
        )}
      </tbody>
    </table>
  );
};
export default Cart;
