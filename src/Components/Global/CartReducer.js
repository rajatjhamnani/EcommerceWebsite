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
        return {
          shoppingCart: [...shoppingCart, product],
          totalPrice: updatedPrice,
          qty: updatedQty,
        };
      }

    case "INC":
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      if (index !== -1) {
        const updatedCart = [...shoppingCart];
        const updatedProduct = { ...updatedCart[index] };
        updatedProduct.qty += 1;
        updatedCart[index] = updatedProduct;

        const updatedTotalPrice = totalPrice + updatedProduct.price;
        const updatedQty = qty + 1;

        return {
          shoppingCart: updatedCart,
          totalPrice: updatedTotalPrice,
          qty: updatedQty,
        };
      }
      return state;

    case "DEC":
      product = action.cart;
      if (product.qty > 1) {
        index = shoppingCart.findIndex((cart) => cart.id === action.id);
        if (index !== -1) {
          const updatedCart = [...shoppingCart];
          const updatedProduct = { ...updatedCart[index] };
          updatedProduct.qty -= 1;
          updatedCart[index] = updatedProduct;
          const updatedTotalPrice = totalPrice - updatedProduct.price;
          const updatedQty = qty - 1;
          return {
            shoppingCart: updatedCart,
            totalPrice: updatedTotalPrice,
            qty: updatedQty,
          };
        }
      }
      return state;

    case "DELETE":
      const filtered = shoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = action.cart;
      updatedQty = qty - product.qty;
      updatedPrice = totalPrice - product.price * product.qty;
      return {
        shoppingCart: [...filtered],
        totalPrice: updatedPrice,
        qty: updatedQty,
      };

    case "PLACED":
      if (shoppingCart.length > 0) {
        const updatedPrice = totalPrice;
        return {
          shoppingCart: [],
          totalPrice: updatedPrice,
          qty: 0,
        };
      }

    case "ZERO":
      if (shoppingCart.length === 0) {
        const updatedPrice = 0;
        return {
          shoppingCart: [],
          totalPrice: updatedPrice,
          qty: 0,
        };
      }

    default:
      return state;
  }
};
