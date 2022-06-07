import { Tasks } from "./tasks";
import { Navbar } from "../components/main/navbar";
import { Footer } from "../components/main/footer";
import { ToastContainer } from 'react-toastify';
import Head from "next/head";

const Home = () => {
  return (
    <div data-theme="lemonade" className="flex flex-col min-h-screen">
      <Head>
        <title>Plantanity</title>
        <meta name="description" content="Grow your dreams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <Navbar />

      <main className="w-full h-full flex-grow pt-12 overflow-auto">
        <Tasks />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
