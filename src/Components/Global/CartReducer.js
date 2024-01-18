import { useEffect } from "react";

const initialState = {
  shoppingCart: [],
  totalPrice: 0,
  qty: 0,
};

export const cartReducer = (state = initialState, action) => {
  const { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;
  let updatedPrice;
  let updatedQty;
  let newEmail = localStorage.getItem("email");
  let createNewEmail = newEmail ? newEmail.replace(/[@.]/g, "") : "";

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;

        fetch(
          `https://react-ecommerce-website-fc29d-default-rtdb.firebaseio.com/cart${createNewEmail}.json`,
          {
            method: "POST",
            body: JSON.stringify({
              id: product.id,
              shoppingCart: [...shoppingCart, product],
              totalPrice: updatedPrice,
              qty: updatedQty,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())

          .then((data) => {
            console.log("POST request success:", data);
          })
          .catch((error) => {
            console.error("Error making POST request:", error);
          });

        return {
          shoppingCart: [...shoppingCart, product],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }
      break;

    case "INC":
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      if (index !== -1) {
        const updatedCart = [...shoppingCart];
        const updatedProduct = { ...updatedCart[index] };
        updatedProduct.qty += 1;
        updatedCart[index] = updatedProduct;

        updatedPrice = totalPrice + updatedProduct.price;
        updatedQty = qty + 1;

        fetch(
          `https://react-ecommerce-website-fc29d-default-rtdb.firebaseio.com/cart${createNewEmail}.json`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              shoppingCart: updatedCart,
              totalPrice: updatedPrice,
              qty: updatedQty,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("PUT request success:", data);
          })
          .catch((error) => {
            console.error("Error making PUT request:", error);
          });

        return {
          shoppingCart: updatedCart,
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }
      return state;
      break;
    case "DEC":
      product = action.cart;
      if (product.qty > 1) {
        index = shoppingCart.findIndex((cart) => cart.id === action.id);
        if (index !== -1) {
          const updatedCart = [...shoppingCart];
          const updatedProduct = { ...updatedCart[index] };
          updatedProduct.qty -= 1;
          updatedCart[index] = updatedProduct;
          updatedPrice = totalPrice - updatedProduct.price;
          updatedQty = qty - 1;

          fetch(
            `https://react-ecommerce-website-fc29d-default-rtdb.firebaseio.com/cart${createNewEmail}.json`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                shoppingCart: updatedCart,
                totalPrice: updatedPrice,
                qty: updatedQty,
              }),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log("PUT request success:", data);
            })
            .catch((error) => {
              console.error("Error making PUT request:", error);
            });

          return {
            shoppingCart: updatedCart,
            totalPrice: updatedPrice,
            qty: updatedQty,
          };
        }
      }
      return state;

      break;

    case "DELETE":
      const filtered = shoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = action.cart;
      updatedQty = qty - product.qty;
      updatedPrice = totalPrice - product.price * product.qty;

      fetch(
        `https://react-ecommerce-website-fc29d-default-rtdb.firebaseio.com/cart${createNewEmail}.json`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            shoppingCart: filtered,
            totalPrice: updatedPrice,
            qty: updatedQty,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("PUT request success:", data);
        })
        .catch((error) => {
          console.error("Error making PUT request:", error);
        });

      return {
        shoppingCart: filtered,
        totalPrice: updatedPrice,
        qty: updatedQty,
      };
      break;
    case "PLACED":
      if (shoppingCart.length > 0) {
        fetch(
          `https://react-ecommerce-website-fc29d-default-rtdb.firebaseio.com//cart${createNewEmail}.json`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              shoppingCart: [],
              totalPrice: totalPrice,
              qty: 0,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("PUT request success:", data);
          })
          .catch((error) => {
            console.error("Error making PUT request:", error);
          });

        return {
          shoppingCart: [],
          totalPrice: totalPrice,
          qty: 0,
        };
      }
      return state;
      break;
    case "ZERO":
      if (shoppingCart && shoppingCart.length === 0) {
        return {
          shoppingCart: [],
          totalPrice: 0,
          qty: 0,
        };
      }
      return state;
      break;

    // case "UPDATE_CART":
    //   let fetchedData = action.cartData;
    //   console.log(fetchedData);
    //   let updatedCart;
    //   for (let i = 0; i < fetchedData.length; i++) {
    //     updatedCart = fetchedData[i].shoppingCart;
    //     updatedPrice = fetchedData[i].totalPrice;
    //     updatedQty = fetchedData[i].qty;
    //   }

    //   // let updatedCart;
    //   // if (fetchedData) {
    //   //   updatedCart = fetchedData.shoppingCart;
    //   //   updatedPrice = parseInt(fetchedData.totalPrice, 10);
    //   //   updatedQty = parseInt(fetchedData.qty);
    //   // }
    //   return {
    //     shoppingCart: updatedCart,
    //     totalPrice: updatedPrice,
    //     qty: updatedQty,
    //   };
    //   break;

    default:
      return state;
  }
};
