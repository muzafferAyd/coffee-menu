import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import copies from "./api/coffees.json";

const App = () => {
  const [products, setProducts] = useState(copies);
  const [currentCategory, setCurrentCategory] = useState("");

useEffect(()=>{
  getFilteregProducts();
})

  const getFilteregProducts = () => {
    // var result=jsonObject.filter(obj=> obj.studentName == "David");
    const res = products.filter((product) => 
      product.category === currentCategory);
      setProducts(currentCategory? res: products)
  };

  const changeCategory = (category) => {
    setCurrentCategory(category);
 
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
