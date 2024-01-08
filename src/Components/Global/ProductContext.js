import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      name: "prerna",
      review: "price is high but good quality",
      price: 100,
      rating: "4/5",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,
      title: "Black and white Colors",
      name: "prerna",
      review: "cheap and easy to use",

      price: 50,
      rating: "4/5",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,

      title: "Yellow and Black Colors",
      name: "vedant",
      review: "good quality with best price",

      price: 70,
      rating: "4/5",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      name: "prayag",
      review: "Not worth at this price range",

      price: 100,
      rating: "2/5",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const [products] = useState(productsArr);
  return (
    <ProductContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
