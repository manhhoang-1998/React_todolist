import { useRef } from "react";
import { useStore, actions } from "../store";

function TodoApp() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const inputSelected = useRef();
  const handleAdd = () => {
    dispatch(actions.addInput(todoInput));
    dispatch(actions.setInput(""));
    inputSelected.current.focus();
  };
  return (
    <>
      <input
        ref={inputSelected}
        value={todoInput}
        placeholder="Enter your job"
        onChange={(e) => dispatch(actions.setInput(e.target.value))}
      ></input>
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {todos.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <button onClick={() => dispatch(actions.removeInput(index))}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
export default TodoApp;
