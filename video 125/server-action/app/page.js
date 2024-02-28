"use client";
import { submitAction } from "@/action/form";
import { useRef } from "react";

export default function Home() {
  const ref = useRef()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <form
        ref={ref}
        action={(e) => {
          submitAction(e);
          ref.current.reset();
        }}
        className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            name="name"
            placeholder="Name"
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            name="email"
            placeholder="Email"
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            placeholder="Message"
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500"
            id="message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
