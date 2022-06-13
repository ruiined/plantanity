import { Tasks } from "./tasks";
import { Navbar } from "../components/main/navbar";
import { Footer } from "../components/main/footer";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";

const Home = () => {
  const queryClient = new QueryClient();
  return (
    <div data-theme="lemonade" className="flex flex-col min-h-screen">
      <Head>
        <title>Plantanity</title>
        <meta name="description" content="Grow your dreams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Tasks />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
      <Footer />
    </div>
  );
};

export default Home;
