import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setShowbtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      title: "Todo 1",
      body: "Todo 1 body",
    },
    {
      title: "Todo 2",
      body: "Todo 2 body",
    },
    {
      title: "Todo 3",
      body: "Todo 3 body",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <div className="card m-4 p-4 border-[2px] border-red-500">
        <div>{todo.title}</div>
        <div>{todo.body}</div>
      </div>
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showbtn?<button>I will be shown only when second button is clicked</button>:""} */}
      {showbtn && (
        <button>I will be shown only when second button is clicked</button>
      )}
      {/* <Todo /> */}
      {todos.map((todo) => {
        // return <Todo key={todo.title} todo={todo} />;
        return (
          <div
            key={todo.title}
            className="card m-4 p-4 border-[2px] border-red-500"
          >
            <div>{todo.title}</div>
            <div>{todo.body}</div>
          </div>
        );
      })}
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn)}>
          {showbtn ? "Hide" : "Show"}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
