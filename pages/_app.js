import 'normalize.css';
import '../styles/index.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Head from 'next/head';
import { Navigation, Footer } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>

      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
