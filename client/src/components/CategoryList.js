import React from "react";
import * as data from "../api/coffees.json";
import { ListGroup, ListGroupItem, Input } from "reactstrap";

const CategoryList = () => {
  return (
    <div>
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="search placeholder"
      />
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default CategoryList;
