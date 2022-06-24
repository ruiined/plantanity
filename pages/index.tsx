import { Tasks } from "./tasks";
import { Navbar } from "../components/main/navbar";
import { Footer } from "../components/main/footer";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import axios from "axios";

const defaultQueryFn = async ({ queryKey }: any) => {
  const { data } = await axios.get(`/api/${queryKey[0]}`);
  let category = queryKey[0].split("/")[0];
  return data[category];
};

const Home = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
    },
  });

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
