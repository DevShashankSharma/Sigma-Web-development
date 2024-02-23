// 'use client'
// import { useState, useEffect } from "react";
import fs from "fs/promises";
import Navbar from "./components/Navbar";

export default function Home() {
  // const [count, setCount] = useState(0)
  //! console.log will show on terminal for server-side rendering and for client-side rendering it will show on console of browser
  console.log("Hello World"); 

  let a = fs.readFile('.gitignore', 'utf8');
  a.then(e => console.log(e));
  return (
    <>
      <div>
        <Navbar />
        I am a component
        {/* {count} */}
      </div>
      {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
    </>
  );
}
