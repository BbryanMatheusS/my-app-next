
import Hero_banner from '../src/patterns/Hero-banner';
import Logo_bar from "../src/patterns/Logo-bar";
import Contact from "../src/patterns/Contact-info";
import Newletter from '../src/patterns/Newletter';
import Jussi_session from '../src/patterns/Jussi-session';
import Our_soluctions from '../src/patterns/our-solutions';





export default function HomePagem(){
    return (

        <>
            <Hero_banner/>
            <Logo_bar/>
            <Our_soluctions/>
            <Jussi_session/>
            <Contact/>
            <Newletter/>
        </>
        
    )
}