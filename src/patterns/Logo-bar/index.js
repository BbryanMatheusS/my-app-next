import styled from "styled-components"

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const Logos = styled.div`
    max-width: 1024px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem 0;
    h3 {
        width: 100%;
        text-align: center;
    }
    p{
        display: none;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        li{
            padding: 1rem;
        }
    }

    @media (min-width: 1024px) {
     h3{
        width: auto;
        text-align: center;
     }
     p{
        display: block;
     }
     ul{
        width: 70%;
        li{
            padding: 0 0 0 0;
        }
     }
        
    }
`;

const Background = styled.div`
    background-color: #F2F2F2;
`;

export default function Logo_bar() {
    return(

        <Background>
            <section>
                <Logos>
                    <h3>Nossas principais lojas VTEX</h3>
                    <p><HiOutlineArrowNarrowRight /></p>
                    <ul>
                        <li><a href="https://www.brastemp.com.br/" target={"_blank"}><img src="/img/Logo-bar/Brastemp.png"></img></a></li>
                        <li><a href="https://www.compracerta.com.br/" target={"_blank"}><img src="/img/Logo-bar/Compracerta.png"></img></a></li>
                        <li><a href="https://www.consul.com.br/" target={"_blank"}><img src="/img/Logo-bar/Consul.png"></img></a></li>
                        <li><a href="https://br.thebar.com/" target={"_blank"}><img src="/img/Logo-bar/The-bar.png"></img></a></li>
                    </ul>
                </Logos>
            </section>
        </Background>
    )
}