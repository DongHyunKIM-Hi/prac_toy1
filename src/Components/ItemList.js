import React, { useContext } from "react";
import { whatItems } from "./Context";
import Item from "./Item";

function ItemList() {
  const items = useContext(whatItems);
  return (
    <div>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}

export default ItemList;
