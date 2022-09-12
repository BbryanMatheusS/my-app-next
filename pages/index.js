import '@nextcss/reset';

import Head from 'next/head';
import Footer from "../src/patterns/Footer";
import Header from "../src/patterns/Header/Header";
import Logo_bar from "../src/patterns/Logo-bar";
import Contact from "../src/patterns/Contact-info";
import Newletter from '../src/patterns/Newletter';
import Jussi_session from '../src/patterns/Jussi-session';
import Our_soluctions from '../src/patterns/our-solutions';





export default function HomePagem(){
    return (

        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            </Head>

            <Header/>
            <Logo_bar/>
            <Our_soluctions/>
            <Jussi_session/>
            <Contact/>
            <Newletter/>
            <Footer/>
        </>
        
    )
}