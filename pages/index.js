import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plantanity</title>
        <meta name="description" content="Growing Goals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Plantanity</h1>

        <p className={styles.description}>
          <code className={styles.code}>I am very empty :(</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/ruiined/plantanity"
            className={styles.card}
          >
            <h2>GitHub Repository &rarr;</h2>
            <p>This project is a work in progress.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>@ Maria Gromovaja</footer>
    </div>
  );
}
