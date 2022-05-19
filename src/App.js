import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import TodoApp from "./Component/TodoApp";
import PlayVideo from "./Component/PlayVideo";

function App() {
  return (
    <div className="App">
      <Link className="linkHome" to="/">
        Home
      </Link>
      <Link to="/todoapp">Go todoApp</Link>
      <Routes>
        <Route path="/" element={<PlayVideo />} />
        <Route path="/todoApp" element={<TodoApp />} />
      </Routes>
    </div>
  );
}

export default App;
