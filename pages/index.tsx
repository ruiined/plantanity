import { Tasks } from "./tasks";
import { Navbar } from "../components/main/navbar";
import { Footer } from "../components/main/footer";
import Head from "next/head";

const Home = () => {
  return (
    <div data-theme="lemonade">
      <Head>
        <title>Plantanity</title>
        <meta name="description" content="Grow your dreams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="w-full h-full flex-grow p-3 overflow-auto">
        <Tasks />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
