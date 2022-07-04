import Head from "next/head";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> taller DB - Medicina </title>
        <meta name="description" content="pagina de prueba" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
export default MyApp;