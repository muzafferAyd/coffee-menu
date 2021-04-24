import React from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";






const App = () => {


  return (
    <Container>
      <Row>
        <Col id="category-side" xs="3">
          <CategoryList title="Category Ldvdvdist" />
        </Col>
        <Col id="product-side" xs="9">
          <ProductList title="Product List" />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
