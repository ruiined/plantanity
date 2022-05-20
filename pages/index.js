import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState("");

  let changeHandler = (event) => {
    setTask(event.target.value);
  };

  let addTask = (event) => {
    setLoading(true);
    event.preventDefault();
    axios.get("/api/add?task=" + task).then((res) => loadTasks());
  };

  let removeTask = (rtask) => {
    setLoading(true);
    axios.get("/api/remove?task=" + rtask).then((res) => loadTasks());
  };

  let loadTasks = () => {
    axios.get("/api/list").then((res) => {
      setData(res.data.tasks);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    loadTasks();
  }, []);

  if (!data) return "Loading...";
  return (
    <div className="">
      <Head>
        <title>Plantanity</title>
        <meta name="description" content="Grow your dreams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          {/* navigation bar */}
          <div className="bg-white shadow-lg max-w-6xl mx-auto px-4 flex justify-between flex space-x-7">
            <h1 className="flex items-center py-4 px-2 font-semibold text-gray-700 text-lg">
              <a href="/">Plantanity</a>
            </h1>
            {/* navigation items */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold hover:bg-green-100"
              >
                Garden
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-400 border-b-4 border-gray-400 font-semibold hover:bg-gray-100"
              >
                Seeds
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-400 border-b-4 border-gray-400 font-semibold hover:bg-gray-100"
              >
                Water
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-400 border-b-4 border-gray-400 font-semibold hover:bg-gray-100"
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
          {/* main content */}
          {loading ? (
            <img src="/loader.gif" />
          ) : (
            <form className="" onSubmit={addTask}>
              <input
                className=""
                type="text"
                name="task"
                onChange={changeHandler}
                placeholder="Enter your task here!"
              />
            </form>
          )}
          <div className="columns-3xs gap-8">
            {data.map((item) => (
              <a
                href="#"
                key={item.key}
                className="w-full aspect-video"
                onClick={() => removeTask(item._id)}
              >
                <p>{item.title}</p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6">
        <a
          href="https://github.com/ruiined/plantanity"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 text-sm text-gray-500 sm:mt-0 hover:underline md:mr-6"
        >
          © 2022 Plantanity
        </a>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a
            href="https://www.linkedin.com/in/maria-gromovaja-7958b0164"
            className="text-gray-400 hover:text-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 27"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
              width="24px"
              height="24px"
            >
              <path
                fillRule="evenodd"
                d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://github.com/ruiined/plantanity"
            className="text-gray-400 hover:text-green-400"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
