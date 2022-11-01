import '@nextcss/reset';
import GlobalStyle from "../src/theme/GlobaStyle"


import Layout from './Layout';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp