import Link from "next/link";
import React from "react";

export function Navbar({}) {
  return (
    // TODO: Extract SVG
    <header>
      <div className="navbar bg-base-100 mt-[-6px] shadow-lg mx-auto px-4 flex pb-0 justify-between stickyl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <h1 className="transition duration-300 flex items-center py-4 px-2 font-semibold text-gray-700 text-2xl hover:text-green-500">
            <Link href="/">Plantanity</Link>
          </h1>
        </div>
        {}
        <div className="navbar-center hidden md:flex items-center space-x-1">
          <a
            href=""
            className="transition duration-300 py-[18px] px-2 text-green-500 border-b-4 border-green-500 font-semibold hover:bg-green-100"
          >
            Garden
          </a>
          <a
            href=""
            className="transition duration-300 py-[18px] px-2 text-gray-400 border-b-4 border-gray-400 font-semibold hover:bg-gray-100"
          >
            Seeds
          </a>
          <a
            href=""
            className="transition duration-300 py-[18px] px-2 text-gray-400 border-b-4 border-gray-400 font-semibold hover:bg-gray-100"
          >
            Water
          </a>
          <a
            href=""
            className="transition duration-300 py-[18px] px-2 text-gray-400 border-b-4 border-gray-400 font-semibold hover:bg-gray-100"
          >
            Achievements
          </a>
        </div>
        <div className="navbar-end hidden md:flex items-center space-x-3 ">
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
