import React, { useState, useEffect } from "react";

import { ListGroup, ListGroupItem, Input } from "reactstrap";
import jsonData from "../../api/coffees.json";

const CategoryList = (props) => {
  return (
    <div>
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="Search"
      />

      <ListGroup>
        <ListGroupItem>All Coffees</ListGroupItem>
        {jsonData
          .filter(
            (val, index, self) =>
              index === self.findIndex((t) => t.category === val.category)
          )
          .map((item) => (
            <ListGroupItem key={item.id}>{item.category}</ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
};

export default CategoryList;
