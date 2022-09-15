import styled from "styled-components";


const Produto_Promocao = styled.div`
    margin: 1rem;
    flex: none;
    display: flex;
    flex-direction: column;
    height: 271px;
    width: 209px;
    background-color: #FFFFFF;
    border-radius: 8px;
    img{
        width: 80%;
        margin: auto;
    }

`;

export default function ProdutoDePromocao(children){
    return <Produto_Promocao>{children}</Produto_Promocao>
}