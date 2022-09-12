import styled from "styled-components";
import Button_2 from "../Button-2/index.js";

export default function Produto() {

    const Produto = styled.div`
        width: 200px;
        height: 350px;
        border: 1px solid grey;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 1rem;
        flex: none;
        margin: 0 0.5rem;

        img{
            margin-bottom: 2rem;
        }

        p{
            margin:1rem 0;
            font-weight: 500;
            :nth-child(3){
                font-size: 0.75rem;
            color: #EE0E7D;
            }
        }

        ul{
            list-style: disc;
            list-style-position: inside;
            li{
                color: #5B5B5B;
            }
        }

        Button{
            margin-top: 0.5rem;
        }

    `;

    
    return(
        <Produto>
            <img src="/img/Produtos/image.png"/>
            <p>Nome do produto #1</p>
            <p>Descriçao do produto #1</p>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            <Button_2>Ver solução</Button_2>
        </Produto>
    )
}