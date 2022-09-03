
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
}
`;


export default function Redes(){
    return (
        <>
            <Lista_redes_sociais>
                <li><img src="/img/Footer/facebook.png"/></li>
                <li><img src="/img/Footer/instagram.png"/></li>
                <li><img src="/img/Footer/linkedin.png"/></li>                
            </Lista_redes_sociais>
        </>
    )
}