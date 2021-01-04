const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
export const toggle_todo = (id) => ({ type: TOGGLE_TODO, id });
let nextId = 1;
export default function todos(state = initial_todo, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        state: state.concat(action.todo),
      };
    case TOGGLE_TODO:
      return {
        state: state.map((one) =>
          one.id === action.id ? { ...one, done: !one.done } : one
        ),
      };
    default:
      return state;
  }
}

const initial_todo = [];
