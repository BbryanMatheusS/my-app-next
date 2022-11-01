import '@nextcss/reset';
import GlobalStyle from "../src/theme/GlobaStyle"

import Layout from './layout';


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