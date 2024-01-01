import React from "react";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cartElements.map((item, index) => (
          <tr>
            <td>
              <img src={item.imageUrl} />
            </td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button style={{ backgroundColor: "Red" }}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Cart;
