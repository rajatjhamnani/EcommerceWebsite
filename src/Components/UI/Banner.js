import React, { useContext } from "react";
import classes from "./Banner.module.css";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { ProductContext } from "../Global/ProductContext";
import { CartContext } from "../Global/CartContext";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className={classes.banner}>
      <Header />
      <body>
        <Container>
          <div className={classes.bold}>
            <h2>Music</h2>
          </div>
          <Row xs={1} md={2} style={{ paddingLeft: "20%" }}>
            {products.map((product, index) => (
              <Col className={classes.column}>
                <Card style={{ width: "18rem" }}>
                  <Link to={`/store/${product.id}`} key={index}>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.price}</Card.Text>
                    </Card.Body>
                  </Link>
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        id: product.id,
                        product: product,
                      })
                    }
                  >
                    Add To Cart
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </body>
      <Footer />
    </div>
  );
};

export default Banner;
