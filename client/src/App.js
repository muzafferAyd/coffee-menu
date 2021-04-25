import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import copies from "./api/coffees.json";

const App = () => {
  const [products, setProducts] = useState(copies);
  const [currentCategory, setCurrentCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFilteregProducts();
    searchCoffee();
  }, [currentCategory, search]);

  const getFilteregProducts = () => {
    const res = copies.filter(
      (product) => product.category === currentCategory
    );
    setProducts(currentCategory ? res : products);
  };

  const searchCoffee = () => {
    const searched = copies.filter(
      (e) => e.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(search ? searched : products);
  };

  const changeCategory = (category) => {
    setCurrentCategory(category);
  };



  const handleSetSearch = (e) => {
    console.log(e.target.value);
    console.log("TEST");

    setSearch(e.target.value);
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
            setSearch={handleSetSearch}
            search={search}
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
