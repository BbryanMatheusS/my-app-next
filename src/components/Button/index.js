import styled from "styled-components";

const Button_default = styled.button`
    height: 45px;
    width: 162px;
    text-align: center;
    padding: 0.7rem;
    color:${props => props.Font_color || "black"};
    background: ${props => props.Background_color || ""};
    border: ${props => props.Border || "1px solid black"};
`;

export const Squared_Hollow = styled(Button_default)`    
    border-radius: 6px;
    transition: 0.5s;
    :hover{
        transform: scale(1.07);
        background-color: rgba(0, 0, 0, 0.100);
        cursor: pointer;
    }
`;

export const Rounded_Hollow = styled(Button_default)`
    border-radius: 24px;
    transition: 0.5s;
    :hover{
        transform: scale(1.07);
        background-color: ${props => props.Font_color };
        color:${props => props.Background_color || "white"};
        cursor:pointer;
    }
`;

export const Filled_Square = styled(Button_default)`    
    border-radius: 6px;    
    font-size: 1rem;
    font-weight: 500;
    transition: 0.5s;
    :hover{
        transform: scale(1.07);
        opacity: 1;
        cursor: pointer;
    }
`;


