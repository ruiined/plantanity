import React from "react";
import Link from "next/link";

export function Navbar({}) {
  return (
    <header>
      <div className="bg-white shadow-lg mx-auto px-4 flex justify-between flex space-x-7 stickyl">
        <h1 className="flex items-center py-4 px-2 font-semibold text-gray-700 text-2xl">
          <Link href="/">Plantanity</Link>
        </h1>
        {}
        <div className="hidden md:flex items-center space-x-1">
          <a
            href=""
            className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold hover:bg-green-100"
          >
            Garden
          </a>
          <a
            href=""
            className="py-4 px-2 text-gray-400 border-b-4 border-gray-400 font-semibold hover:bg-gray-100"
          >
            Seeds
          </a>
          <a
            href=""
            className="py-4 px-2 text-gray-400 border-b-4 border-gray-400 font-semibold hover:bg-gray-100"
          >
            Water
          </a>
          <a
            href=""
            className="py-4 px-2 text-gray-400 border-b-4 border-gray-400 font-semibold hover:bg-gray-100"
          >
            Achievements
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-3 ">
          <a
            href=""
            className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
          >
            Log In
          </a>
          <a
            href=""
            className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
