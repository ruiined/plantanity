import { Navbar } from "./navbar";
import { Footer } from "./footer";
import Head from "next/head";
import Image from "next/image";
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
    axios.get("/api/add?task=" + task).then(() => loadTasks());
  };

  let removeTask = (rtask) => {
    setLoading(true);
    axios.get("/api/remove?task=" + rtask).then(() => loadTasks());
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
    <div>
      <Head>
        <title>Plantanity</title>
        <meta name="description" content="Grow your dreams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="w-full h-full flex-grow p-3 overflow-auto">
        <div>{/* navigation bar */}</div>
        {/* main content */}
        {loading ? (
          <Image alt="Loading" layout="fill" src="/loader.gif" />
        ) : (
          <form className="" onSubmit={addTask}>
            <input
              className=""
              type="text"
              name="task"
              autoComplete="off"
              autoFocus="true"
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
      </main>

      <Footer />
    </div>
  );
};

export default Home;
