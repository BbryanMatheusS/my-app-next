
import Footer from "../src/patterns/Footer";
import Header from "../src/patterns/Header/index.js"; 

import Head from "next/head";

export default function Layout( { children } ) {
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" />
                <title>Jussi store para JR</title>
            </Head>
            <Header/>
                <main>{children}</main>
            <Footer/>
        </>

    )
}