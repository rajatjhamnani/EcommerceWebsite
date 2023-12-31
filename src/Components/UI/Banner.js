import React from "react";
import classes from "./Banner.module.css";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
const Banner = (props) => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div className={classes.banner}>
      <header>
        <div className={classes.star}>
          <p className={classes.font}>The Generic</p>
        </div>
      </header>
      <body>
        <Container>
          <div className={classes.bold}>
            <h2>Music</h2>
          </div>
          <Row xs={1} md={2} style={{ paddingLeft: "20%" }}>
            {productsArr.map((product, index) => (
              <Col className={classes.column} key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </body>
      <footer>
        <div className={classes.footer}>
          <div className={classes.feet}>
            <p className={classes.float}>The Generic</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Banner;
