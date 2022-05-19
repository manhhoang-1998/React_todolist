import { ADD_INPUT, SET_INPUT, REMOVE_INPUT } from "./constant";

const initialState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_INPUT:
      return { ...state, todoInput: action.payload };
    case ADD_INPUT:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_INPUT:
      return {
        ...state,
        todos: [...state.todos].filter(
          (item, index) => index !== action.payload
        ),
      };
    default:
  }
}

export { initialState };
export default reducer;
