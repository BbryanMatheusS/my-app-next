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
    :hover{
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.200);
        cursor: pointer;
    }
`;

export const Rounded_Hollow = styled(Button_default)`
    border-radius: 24px;
    :hover{
        transition: 0.5s;
        background-color: ${props => props.Font_color };
        color:${props => props.Background_color || "white"};
        cursor:pointer;
    }
`;

export const Filled_Square = styled(Button_default)`    
    border-radius: 6px;    
    font-size: 1rem;
    font-weight: 500;
    :hover{
        transition: 0.5s;
        opacity: 0.6;
        cursor: pointer;
    }
`;


