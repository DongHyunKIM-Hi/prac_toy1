import React, { createContext, useReducer, useRef } from "react";
import produce from "immer";
import ItemList from "./ItemList";

export const howAct = createContext("값을 설정해주세요");
export const whatItems = createContext("뭘 할까요?");
function reducer(items, action) {
  switch (action.type) {
    case "create":
      return (items = produce(items, (draft) => {
        draft.push(action.newTodo);
      }));
    // return에서 ()과 {} 차이가 있다.
    case "remove":
      return items.filter((item) => item.id !== action.id);
    default:
      throw new Error("어디가 틀린겨 ㅠㅠ");
  }
}
window.produce = produce;
function Context() {
  const initialSet = [
    {
      id: 1,
      Todo: "React로 토이플잭 만들어보기",
      active: false,
    },
    {
      id: 2,
      Todo: "영어 회화 공부하기",
      active: false,
    },
    {
      id: 3,
      Todo: "알고리즘 공부",
      active: false,
    },
  ];
  const [items, dispatch] = useReducer(reducer, initialSet);
  const nextId = useRef(4);
  const onCreate = () => {
    dispatch({
      type: "create",
      newTodo: {
        id: nextId.current,
        Todo: "추가 되었습니다.",
        active: false,
      },
    });
    nextId.current += 1;
  };
  return (
    <howAct.Provider value={dispatch}>
      <whatItems.Provider value={items}>
        <ItemList />
      </whatItems.Provider>
      <div>
        <button onClick={onCreate}>추가하기</button>
      </div>
    </howAct.Provider>
  );
}

export default Context;
