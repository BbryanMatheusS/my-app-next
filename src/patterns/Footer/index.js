import react from "react";
import styled from "styled-components";

import Redes from "../../components/Redes_Sociais/Redes_Sociais";

const Foter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 20px 0px;
    
    img{
        width: 142px;
        height: 27px;
        transition: 0.5s;

        :hover{
            
            transform: scale(1.3);
        }
    }

    @media(min-width: 1024px) {
        padding:  10px 2rem;
        max-width:1024px; 
        flex-direction: row;
        justify-content: space-around;
    }

    @media(min-width: 1440px) {
        max-width:1440px;
        
        
    }
    
`;

export default function Footer(){
    return(
        <footer>            
            <Foter>
                <a href="https://www.wpp.com/" target={"_blank"}><img src="/img/Footer/wppcompany.png"/></a>
                <Redes/>              
            </Foter>
        </footer>        
    );
}