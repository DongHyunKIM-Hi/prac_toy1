import React, { useContext } from "react";
import { howAct } from "./Context";

function Item({ item }) {
  const dispatch = useContext(howAct);
  const onRemove = () => {
    dispatch({
      type: "remove",
      id: item.id,
    });
  };
  return (
    <div key={item.key}>
      <span>{item.Todo}</span>
      <button onClick={onRemove}>삭제하기</button>
    </div>
  );
}

export default Item;
