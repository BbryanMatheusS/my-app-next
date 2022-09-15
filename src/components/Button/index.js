import styled from "styled-components";

const Default_Button = styled.button`
    height: 48px;
    width: 162px;
    border: 1px solid #000000;
    border-radius: 6px;
    :hover{
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.100);
    }
`;

export default function Button({children}){
    return (
        <>
            <Default_Button>{children}</Default_Button>
        </>
        
    )

}

