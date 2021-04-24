import React, { useState, useEffect } from "react";
import copies from "../../api/coffees.json"
import { ListGroup, ListGroupItem, Input } from "reactstrap";


const CategoryList = (props) => {
  const [categories, setCategories] = useState(copies)


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
        {categories
          .filter(
            (val, index, self) =>
              index === self.findIndex((t) => t.category === val.category)
          )
          .map((item) => (
            <ListGroupItem onClick={()=>{props.changeCategory(item.category)}} key={item.id}>{item.category}</ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
};

export default CategoryList;
