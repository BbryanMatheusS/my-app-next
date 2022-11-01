
import styled from "styled-components";

const Lista_redes_sociais = styled.ul`
display: flex;
width: 130px;
justify-content: space-between;
li {
    img{
        width:32px;
        height: 32px;
    }

    :hover{
        /* transition: 0.5s;
        transform:scale(1.5); */
    }
}
`;


export default function Redes(){
    return (
        <>
            <Lista_redes_sociais>
                <li><a href="https://pt-br.facebook.com/agencia.jussi/" target={"_blank"}><img src="/img/Footer/facebook.png"/></a></li>
                <li><a href="https://www.instagram.com/jussi/" target={"_blank"}><img src="/img/Footer/instagram.png"/></a></li>
                <li><a href="https://br.linkedin.com/company/agencia-jussi" target={"blank"}><img src="/img/Footer/linkedin.png"/></a></li>                
            </Lista_redes_sociais>
        </>
    )
}