import styled from "styled-components";


export default function Button({children}){

const Button = styled.button`
    height: 48px;
    width: 162px;
    border: 1px solid #000000;
    border-radius: 6px;
    :hover{
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.100);
    }
`;

    return (
        <Button>{children}</Button>
    )

}

