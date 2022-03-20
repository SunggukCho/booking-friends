import '../styles/globals.css';
import GlobalNav from '../src/components/GlobalNav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalNav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
