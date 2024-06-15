import "@/styles/globals.css";
import HomePage from '../components/HomePage/HomePage';
import {Fragment} from 'react';
 
export default function App({ Component, pageProps }) {
  return <Fragment>
    <Component {...pageProps} /><HomePage/>
  </Fragment>;
}
