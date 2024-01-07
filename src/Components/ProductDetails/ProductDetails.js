import React from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
const ProductDetails = (props) => {
  const { productId } = useParams();
  console.log(productId);
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
  const selectedProduct = productsArr.find(
    (product) => product.id === parseInt(productId)
  );
  return (
    <>
      <div style={{ paddingTop: "8%" }}>
        <Row xs={1} md={2}>
          {selectedProduct ? (
            <Col>
              <Card>
                <Card.Img variant="top" src={selectedProduct.imageUrl} />
                <Card.Body>
                  <Card.Title>{selectedProduct.title}</Card.Title>
                  <Card.Text>
                    <p>
                      <b>product Rating</b>
                      :-{selectedProduct.rating}
                    </p>
                    <h1>review</h1>
                    <p>{selectedProduct.name}:-</p>
                    <p>{selectedProduct.review}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            <p>product not found</p>
          )}
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
