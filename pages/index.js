import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
    axios.get("/api/remove?task=" + rtask._id).then((res) => loadTasks());
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
    <div className={styles.container}>
      <Head>
        <title>Plantanity</title>
        <meta name="description" content="Grow your dreams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h1 className={styles.title}>
            <a href="/">Plantanity</a>
          </h1>
          {loading ? (
            <a href="#" className={styles.card}>
              <img src="/loader.gif" />
            </a>
          ) : (
            <form className={styles.cardForm} onSubmit={addTask}>
              <input
                className={styles.cardInput}
                type="text"
                name="task"
                onChange={changeHandler}
                placeholder="Enter your task here!"
              />
            </form>
          )}
          {data.map((item) => (
            <a
              href="#"
              onClick={() => removeTask(item)}
              className={styles.card}
            >
              <p>{item.title}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ruiined/plantanity"
          target="_blank"
          rel="Plantanity Github Repository"
        >
          Plantanity, 2022
        </a>
      </footer>
    </div>
  );
};

export default Home;
