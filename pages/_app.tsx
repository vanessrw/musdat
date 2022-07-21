import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Toaster} from 'react-hot-toast';
import '../styles/404.css';
import '../styles/About.css';
import '../styles/Account.css';
import '../styles/Benefit.css';
import '../styles/Button.css';
import '../styles/Date.css';
import '../styles/Event.css';
import '../styles/EventTitle.css';
import '../styles/Footer.css';
import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Hero.css';
import '../styles/Navbar.css';
import '../styles/SubHeader.css';
import '../styles/UserFind.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>@vanessrw</title>
        <meta
          name="description"
          content="Latihan 1 Musdat 2022"
        />
      </Head>
      <Component {...pageProps} />
      <Toaster toastOptions={{position: 'bottom-center'}} />
    </>
  );
}

export default MyApp;
