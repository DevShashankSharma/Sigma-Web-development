import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-3 gap-4 items-center justify-center">
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="card flex flex-col gap-2 bg-red-50 h-[100%]"
            >
              <div className="title font-bold text-2xl">
                {post.title ? post.title : "No title"}
              </div>
              <div className="body font-normal text-lg">
                {post.body ? post.body : "No body"}
              </div>
              <span className="author flex w-full items-start p-3">By UserId : {post.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
