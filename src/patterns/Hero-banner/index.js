import styled from "styled-components";
import { Rounded_Hollow, Squared_Hollow } from "../../components/Button";
import {Produto_Promocao} from "../../components/Produto-Promocao";
const Background = styled.div`
    background-color: #03FFA5;
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width:1024px) {
        align-items: flex-start;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1{
        font-size: 3rem;
        font-weight: 500;
        text-align: center;
    }

    P{
        text-align: center;
        max-width: 500px;
        margin: 1rem auto;
    }

    


    @media(min-width:1024px){
        flex-direction: row;
        padding: 2rem 1rem;

        div:nth-child(1){
            h1{
                font-size: 64px;
                text-transform: uppercase;
                width: 451px;
                text-align: left;
            }

            p{
                margin: 2rem 0;
                line-height: 24px;
                text-align: left;
                width: 329px;
            }     
        }        
    } 
`;

const Promocao = styled.div`
    display: flex;
    width: 70%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin: auto auto;
    @media(min-width:1024px){
        overflow:visible;
        width: auto;
        position: relative;
        margin: auto 0;        
    }
`;

const Produto_1 = styled(Produto_Promocao)`

    @media(min-width:1024px) {
        position: absolute;
        right: 170px;
        top: 50px;
    }   
`;
const Produto_2 = styled(Produto_Promocao)`
    @media(min-width:1024px) {
        position: relative;
        bottom:100px ;
        right: 20px;
        z-index: 1;
    }
`;
const Produto_3 = styled(Produto_Promocao)`
    @media(min-width:1024px) {
        position: absolute;
        left:100px;
        top:100px  
    } 
`;


export default function Hero_banner(){
    return(
        <Background>
            <section>
                <Content>
                    <Text>
                        <h1>Criamos lojas que vendem mais.</h1>
                        <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                        <Squared_Hollow Font_color="black" Border="1px solid black">Veja nossas soluções</Squared_Hollow>
                    </Text>

                    <Promocao>
                        <Produto_1>
                            <img src="/img/Hero-banner/geladeira.png"></img>
                            <Rounded_Hollow Font_color="#EE0E7D" Border="1px solid #EE0E7D">Mais detalhes</Rounded_Hollow>
                        </Produto_1>
                        <Produto_2>
                            <img src="/img/Hero-banner/batedeira.png"></img>
                            <Rounded_Hollow Font_color="#EE0E7D" Border="1px solid #EE0E7D">Comprar em 12x</Rounded_Hollow>
                        </Produto_2>
                        <Produto_3>
                            <img src="/img/Hero-banner/bebida.png"></img>
                            <Rounded_Hollow Font_color="#EE0E7D" Border="1px solid #EE0E7D">Adicionar à sacola</Rounded_Hollow>
                        </Produto_3>                        
                    </Promocao>
                </Content>                
            </section>
        </Background>        
    )
}