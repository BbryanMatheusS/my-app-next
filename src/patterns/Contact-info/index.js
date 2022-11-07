import styled from "styled-components";

import Description from "../../components/Description";


const Conteudo = styled.div`

    box-sizing: border-box;
    color: white;
    padding: 6rem 1rem ;
    

    p{
        text-align: center;
        margin: 2rem 0 0 0;
        font-size: 1rem;
    }
    p:nth-child(3){
        margin: 0 0 0 0;
        text-align: center;
        font-size: 1.5rem;
    }
`;

const Background = styled.div`
    background-color: #EE0E7D;
`;


export default function Contact() {
    return(

        <Background>
            <section>
                <Conteudo>
                    <Description>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</Description>
                    <p>Entre em contato</p>
                    <p>Comercial@jussi.com.br</p>
                </Conteudo>
            </section>
        </Background>
    )
}