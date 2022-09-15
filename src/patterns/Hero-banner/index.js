import styled from "styled-components";
import Button from "../../components/Button";

const Background = styled.div`
    background-color: #03FFA5;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;


    div:nth-child(1){

        
        display: flex;
        flex-direction: column;
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

        Button{
            margin: auto;
        }
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

            Button{
                margin: 0;
            }
        
        }
        
    }
    

`;

const Promocao = styled.div`
    display: flex;
    width: 80%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    margin: auto;
    @media(min-width:1024px){
        overflow:visible;
        width: auto;
        position: relative;

        
    }
`;



const Produto_Promocao = styled.div`
    margin: 1rem;
    flex: none;
    display: flex;
    flex-direction: column;
    height: 271px;
    width: 209px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.5);
    img{
        width: 80%;
        margin: auto;
    }
`;

const Produto_1 = styled(Produto_Promocao)`

    @media(min-width:1024px) {
        position: absolute;
        right: 150px;
        top: 50px;
    }
    
`;
const Produto_2 = styled(Produto_Promocao)`
    @media(min-width:1024px) {
        position: relative;
        bottom:100px ;
        z-index: 1;
    }
`;
const Produto_3 = styled(Produto_Promocao)`
    @media(min-width:1024px) {
        position: absolute;
        left:120px;
        top:100px  
    } 
`;

const Button_Promoçao = styled.div`
    width: auto;
    min-width: 150px;
    color: #EE0E7D;    
    border: 1px solid #EE0E7D;
    border-radius: 24px;
    text-align: center;
    padding: 0.7rem;
    margin: auto;
`;

export default function Hero_banner(){
    return(
        <Background>
            <section>
                <Content>
                    <div>
                        <h1>Criamos lojas que vendem mais.</h1>
                        <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                        <Button>Veja nossas soluções</Button>
                    </div>

                    <Promocao>
                        <Produto_1>
                            <img src="/img/Hero-banner/geladeira.png"></img>
                            <Button_Promoçao>Mais detalhes</Button_Promoçao>
                        </Produto_1>
                        <Produto_2>
                            <img src="/img/Hero-banner/batedeira.png"></img>
                            <Button_Promoçao>Comprar em 12x</Button_Promoçao>
                        </Produto_2>
                        <Produto_3>
                            <img src="/img/Hero-banner/bebida.png"></img>
                            <Button_Promoçao>Adicionar à sacola</Button_Promoçao>
                        </Produto_3>                        
                    </Promocao>
                </Content>                
            </section>
        </Background>
        
    )
}