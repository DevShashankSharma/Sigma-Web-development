import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  });

  return (
    <>
      <div className="container grid grid-cols-3 gap-4 items-center justify-center">
        {posts.map((post) => {
          return (
            <div key={post.id} className="card flex flex-col gap-2 bg-red-50 h-[100%]">
              <div className="title font-bold text-2xl">
                {post.title ? post.title : "No title"}
              </div>
              <div className="body font-normal text-lg">
                {post.body ? post.body : "No body"}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
