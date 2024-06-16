import "@/styles/globals.css";
import Header from '../components/Header/Header';
import {Fragment} from 'react';
 
export default function App({ Component, pageProps }) {
  return <Fragment>
    <Component {...pageProps} /><Header/>
  </Fragment>;
}
