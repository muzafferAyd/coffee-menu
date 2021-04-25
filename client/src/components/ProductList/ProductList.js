import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import './ProductList.css'

const ProductList = (props) => {
  return (
    <div>
      <Card class='card'>
        {props.products.map((product) => (
          <CardBody key={product.id}>
            <CardTitle tag="h4">{product.title}</CardTitle>
            <CardText tag="h5" id='desc'>{product.description}</CardText>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Ingredients: {product.ingredients}
            </CardSubtitle>
          </CardBody>
        ))}
      </Card>
    </div>
  );
};

export default ProductList;
