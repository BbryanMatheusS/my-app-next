import '@nextcss/reset';
import GlobalStyle from "../src/theme/GlobaStyle"
import Header from "../src/patterns/Header/Header";
import Footer from "../src/patterns/Footer";
<Footer/>

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp