import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import copies from "./api/coffees.json";
import "./App.css"

const App = () => {
  const allproduct = [...copies];
  const [products, setProducts] = useState(copies);
  const [currentCategory, setCurrentCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getFilteredProducts = () => {
      const res = copies.filter(
        (product) => product.category === currentCategory
      );
      setProducts(currentCategory ? res : products);
    };

    getFilteredProducts();
  }, [currentCategory]);

  useEffect(() => {
    const searchCoffee = () => {
      const searched = copies.filter((e) =>
        e.title.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(search ? searched : products);
    };

    searchCoffee();
  }, [search]);

  const getAllCoffees = () => {
    setProducts(allproduct);
  };

  const changeCategory = (category) => {
    setCurrentCategory(category);
    getAllCoffees();
  };

  const handleSetSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container id="container">
      <div id="emptyNav"/>
      <Row>
        <Col id="category-side" xs="3">
          <CategoryList
            changeCategory={changeCategory}
            currentCategory={currentCategory}
            products={products}
            title="Category List"
            setSearch={handleSetSearch}
            setProducts={setProducts}
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
