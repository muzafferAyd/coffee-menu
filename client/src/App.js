import React from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <Container>
      <Row>
        <Col id="category-side" xs="3">
          <CategoryList />
        </Col>
        <Col id="product-side" xs="9">
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
