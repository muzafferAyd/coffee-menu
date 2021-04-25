import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const ProductList = (props) => {
  return (
    <div>
      <h2>
        {props.title} - {props.currentCategory}
      </h2>
      <Card>
        {props.products.map((product) => (
          <CardBody key={product.id}>
            <CardTitle tag="h5">{product.title}</CardTitle>
            <CardText>{product.description}</CardText>
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
