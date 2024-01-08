import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { ProductContext } from "../Global/ProductContext";
const ProductDetails = (props) => {
  const { products } = useContext(ProductContext);

  const { productId } = useParams();
  console.log(productId);

  const selectedProduct = products.find(
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
