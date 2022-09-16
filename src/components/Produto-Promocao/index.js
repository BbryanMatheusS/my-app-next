import styled from "styled-components";


export const Produto_Promocao = styled.div`
    margin: 1rem;
    padding: 0.5rem;
    flex: none;
    display: flex;
    flex-direction: column;
    height: 271px;
    width: 209px;
    background-color: #FFFFFF;
    border-radius: 8px;
    
    align-items: center;
    img{
        width: 80%;
        margin: auto;
    }

    @media (min-width:1024px){
        box-shadow: 5px 15px 15px rgba(0, 0, 0, 0.5);
    }
`;