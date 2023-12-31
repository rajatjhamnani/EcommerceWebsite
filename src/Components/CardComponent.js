import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
const CardComponent = (props) => {
  return (
    <Container>
      <Row xs={1} md={2}>
        <Col>
          <Card>
            <Card.Img
              style={{ height: "200px", width: "200px", marginLeft: "160px" }}
              variant="top"
              src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default CardComponent;
