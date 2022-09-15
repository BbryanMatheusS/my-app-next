import styled from "styled-components";

import Button from "../../components/Button";


const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        max-width:230px;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        box-sizing: border-box;
        
        

        h2{
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: 700;
            padding-bottom: 2rem;
        }

        p{
            line-height: 1.5rem;
            padding-bottom: 2rem;
        }

        :nth-child(1){
            padding-bottom: 2rem;
        }

        Button{
            margin: auto;
        }
    }

    

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-evenly;

        div{
            Button{
                margin: 0;
            }
        }

        img{
        max-width: 600px;
        }
    }
`;



const Background = styled.div`
    background-image: linear-gradient(180deg, white 20%, #f2f2f2 );
    padding: 4rem 2rem ;

    @media (min-width: 1024px){
        background-image: linear-gradient(90deg, white 50%, #f2f2f2 50% );
    }
`;



export default function Jussi_session() {
    return(
        <Background>
            <section>
                <Content>
                    <div>
                        <h2>OLÁ, SOMOS A JUSSI</h2>
                        <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                        <Button>Conheça a jussi</Button>
                    </div>
                    <img src="/img/Jussi-session/image-jussi.png"/>
                </Content>
            </section>
        </Background>

    )
}