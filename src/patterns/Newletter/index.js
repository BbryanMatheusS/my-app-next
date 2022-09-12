import styled from "styled-components";

import Description from "../../components/Description";

const Email = styled.div`
    display: flex;
    margin: 0 auto;
    width: 60vw;
    max-width: 550px;
    justify-content: space-between;
    border-bottom: 2px solid #03ffa5;
    margin-top: 2rem;
    color: #03FFA5;
    

    :nth-child(1){
        color: white;
    }

    input:nth-child(2){
        display: none;

        @media (min-width: 1024px) {
            display: block;
        }
    }
`;


const Background = styled.div`
    background-color: black;
    color: white;
    padding: 6rem 1rem ;
`;

export default function Newletter() {
    return (
        <Background>
            <section>
                <Description>Receba novidades da nossa area de produtos digitais.</Description>
                <Email>
                    <input type='email' placeholder='Digite seu e-mail'></input>
                    <input type='submit' value="Cadastrar"></input>
                </Email>
            </section>
        </Background>

    )
}