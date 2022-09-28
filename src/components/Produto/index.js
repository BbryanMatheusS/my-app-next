import styled from "styled-components";
import { Filled_Square } from "../../components/Button";

export const Produtos = styled.div`
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
        width: 100px;
        
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

export default function Produto() {
    return(
        <Produtos>
            <img src="/img/Produtos/image.png"/>
            <p>Nome do produto #1</p>
            <p>Descriçao do produto #1</p>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            <Filled_Square Background_color="#03FFA5" Border="none">Ver solução</Filled_Square>
        </Produtos>
    )
}