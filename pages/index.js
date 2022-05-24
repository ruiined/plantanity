import { Tasks } from "./tasks/tasks";
import { Navbar } from "./main/navbar";
import { Footer } from "./main/footer";
import Head from "next/head";

const Home = () => {
  return (
    <div>
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
