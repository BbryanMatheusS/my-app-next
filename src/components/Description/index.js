
import styled from "styled-components";

const Default_Description = styled.h2`
    color: white;
    text-align: center;
    margin: 0  auto;
    max-width: 676px;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
`;

export default function Description({children}){
    return <Default_Description>{children}</Default_Description>
}