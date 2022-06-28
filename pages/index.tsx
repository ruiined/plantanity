import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import { Footer } from '../components/main/footer';
import { Navbar } from '../components/main/navbar';
import { Tasks } from './tasks';

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
      <Tasks />
      <Footer />
    </div>
  );
};

export default Home;
