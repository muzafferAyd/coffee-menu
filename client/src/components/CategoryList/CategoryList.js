import React from "react";
import { ListGroup, ListGroupItem, Input } from "reactstrap";
import copies from "../../api/coffees.json";

const CategoryList = (props) => {
  const filterList = [...copies];
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
        value={props.search}
        onChange={(e)=>props.setSearch(e)}
      />

      <ListGroup>
        <h2>{props.search}</h2>
        <ListGroupItem onClick={() => props.searchCoffe()}>
          All Coffees
        </ListGroupItem>
        {filteredList.map((item) => (
          <ListGroupItem
            onClick={() => props.changeCategory(item.category)}
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
