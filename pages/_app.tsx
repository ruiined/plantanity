import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
