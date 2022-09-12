import styled from "styled-components";

export default function Button_2({children}){

    const Button = styled.button`
        width: 100%;
        height: 40px;
        background: #03FFA5;
        border-radius: 6px;
        color: #000000;
        font-size: 1rem;
        font-weight: 500;

    `;

    return(
        <Button>{children}</Button>
    )
}