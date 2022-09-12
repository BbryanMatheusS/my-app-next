
import styled from "styled-components";



export default function Description({children}){


    const Description = styled.h2`
        color: white;
        text-align: center;
        margin: 0  auto;
        max-width: 676px;
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
    `;
    return <Description>{children}</Description>
}