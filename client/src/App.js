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
  }, [currentCategory]);

  const getFilteregProducts = () => {
    // var result=jsonObject.filter(obj=> obj.studentName == "David");
    const res = copies.filter(
      (product) => product.category === currentCategory
    );
    setProducts(currentCategory ? res : products);
  };

  // const searchCoffe = () => {
  //   copies.filter((e) => {
  //     e.title.toLowerCase().includes(search.toLowerCase());
  //     console.log(e.title, "search", search);
  //   });
  // };



  const changeCategory = (category) => {
    setCurrentCategory(category);
  };

  // const handleChange = (value)=>{
  //   setSearch(value)
  //   console.log(search)
  // }

  const handleSetSearch = e => {
    console.log(e.target.value);
    console.log("TEST");

    setSearch(e.target.value);
  };


  // const searchFunc = ()=>{
  //   setSearch(e.target.value)
  // }

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
