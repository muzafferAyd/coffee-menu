import React from "react";
import { ListGroup, ListGroupItem, Input } from "reactstrap";
import copies from "../../api/coffees.json";
import "./CategoryList.css"

const CategoryList = (props) => {
  const filterList = [...copies];
  const filteredList = filterList.filter(
    (val, index, self) =>
      index === self.findIndex((t) => t.category === val.category)
  );

  return (
    <div>
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="Search"
        value={props.search}
        onChange={(e)=>props.setSearch(e)}
      />

      <ListGroup  class="list-group" >
        <ListGroupItem class="sub-group"  onClick={() =>props.changeCategory()}>
          All Coffees
        </ListGroupItem >
        {filteredList.map((item) => (
          <ListGroupItem class="sub-group"
            onClick={() => props.changeCategory(item.category)}
            key={item.id}
            active = {item.category===props.currentCategory?true:false}
          >
            {item.category }
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CategoryList;
