"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John",
        age: 30,
      }),
    });
    let response = await a.json();
    console.log(response);
  };
  return (
    <div>
      <div className="text-xl font-bold">Next js api routes</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick} >
        Click me
      </button>
    </div>
  );
}
