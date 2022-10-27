import React, { useState } from "react"
import styled from "styled-components"
import Link from "next/link";

import { GoSearch } from 'react-icons/go';
import { CgShoppingCart } from 'react-icons/cg';

const Navigation = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 0;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    ul{
        display: flex;
        flex-direction: column;

        li{
        margin: 10px 0px;
        };
    }

    ul:nth-child(2){
        li:nth-child(1){
        order:1;
        }
        li:nth-child(3){
            font-size: 1.2rem;
            margin: 5px auto;
        }
    }
    
    @media (min-width: 1024px) {
        width: 100%;
        margin: 0;
        flex-direction: row;
        justify-content: space-between;
        ul{
            align-items: center;     
            flex-direction:row ;
            
            li{
            margin: 0px 10px;
            };
        }
        ul:nth-child(2){
            justify-content: end;
            li:nth-child(1){
            order:0;
            }
            
        }
    }   
    
`;

const Barra_Pesquisa = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    padding: 5px;
    input{
        border: none;
        background-color: white;
        outline: 0;

        &::placeholder{
            color: #ee0e7d;
        }

        &:focus{
            border: none;
            background-color: white;
            outline: 0;
        }
    };
    button{
        border: none;
        background-color: white;
        outline: 0;
        font-size: 1.2rem;
    }
    
    

`;


export default function Nav_Bar(){

    const [search, setSearch] = useState("")

    console.log(search)
    return(
        <>
            <Navigation>
                <ul>
                    <li>Nossas Soluçoes</li>
                    <li>Conheça a Jussi</li>
                </ul>
                <ul>
                    <li>
                        <Barra_Pesquisa>
                            <input type="text" placeholder="Buscar" onChange={e => setSearch(e.target.value)}/>
                            <Link href={`/champion/${search}`} passHref>
                                {/* <a href={`/champion/${search}`}>  */}
                                    <button type="submit"><GoSearch/></button>
                                {/* </a> */}
                            </Link>
                        </Barra_Pesquisa>
                    </li>
                    <li>login</li>
                    <li><CgShoppingCart/></li>
                </ul>
            </Navigation>
        </>
    )
}