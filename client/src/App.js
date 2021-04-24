import React,  {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import copies from "./api/coffees.json"





const App = () => {
  

  const [currentCategory, setCurrentCategory] = useState("")

  const changeCategory=(category)=>{
    setCurrentCategory({currentCategory})
    console.log(category)
  }

  return (
    <Container >
      <Row>
        <Col  id="category-side" xs="3">
          <CategoryList  changeCategory={changeCategory} currentCategory={currentCategory} products={copies}/>
        </Col>
        <Col id="product-side" xs="9">
          <ProductList currentCategory={currentCategory} title="Product List" products={copies} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
