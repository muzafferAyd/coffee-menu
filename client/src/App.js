import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import copies from "./api/coffees.json";

const App = () => {
  const [products, setProducts] = useState(copies);

  const [currentCategory, setCurrentCategory] = useState("");


  

  const changeCategory = (category) => {
    setCurrentCategory(category);
    // setProducts(
    //   products.map((prod) =>
    //     //prod.category === currentCategory ?

    //   )
    // );
  };

  return (
    <Container>
      <Row>
        <Col id="category-side" xs="3">
          <CategoryList
            changeCategory={changeCategory}
            currentCategory={currentCategory}
            products={products}
            title="Category List"
          />
        </Col>
        <Col id="product-side" xs="9">
          <ProductList
            currentCategory={currentCategory}
            changeCategory={changeCategory}
            products={products}
            title="Coffes List"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
