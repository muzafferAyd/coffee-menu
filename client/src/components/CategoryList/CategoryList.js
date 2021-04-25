import React from "react";
import { ListGroup, ListGroupItem, Input } from "reactstrap";


const CategoryList = (props) => {


  const filterList = [...props.products];
  const filteredList = filterList.filter(
    (val, index, self) =>
      index === self.findIndex((t) => t.category === val.category)
  );


  return (
    <div>
      <h2>{props.title}</h2>
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="Search"
      />

      <ListGroup>
        <ListGroupItem>All Coffees</ListGroupItem>
        {filteredList.map((item) => (
          <ListGroupItem
            onClick={()=>props.changeCategory(item.category)}
            key={item.id}
          >
            {item.category}
          </ListGroupItem>
        ))}
      </ListGroup>
    <h2>{props.currentCategory}</h2>
    </div>
  );
};

export default CategoryList;
