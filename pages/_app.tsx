import Layout from '../components/Layout.js'
import '../styles/globals.css'
import 'prismjs/themes/prism-okaidia.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}
