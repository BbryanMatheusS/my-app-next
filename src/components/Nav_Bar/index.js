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


                a{
                    position: relative;
                    transition: 0.5s;

                    ::after{
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -3px;
                        height: 3px;
                        width: 0;
                        border-radius: 2px;
                        background-color: #03FFA5;
                        transition: 0.5s ease ;
                    }

                    :hover::after{
                        cursor: pointer;
                        width: 100%;
                    }

                    :hover{
                        font-size: 1.1rem;
                        
                    }
                }
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
    // console.log(search)


    return(
        <>
            <Navigation>
                <ul>
                    <li><a smooth href="#Out_soluction">Nossas Soluçoes</a></li>
                    <li><a href="#">Conheça a Jussi</a></li>
                </ul>
                <ul>
                    <li>
                        <Barra_Pesquisa>
                            <input type="text" placeholder="Buscar" onfocus="this.value=''" onChange={e => setSearch(e.target.value)}  />
                            <Link href={`/champion/${search.charAt(0).toUpperCase() + search.slice(1)}`} passHref>
                                {/* <a href={`/champion/${search}`}>  */}
                                    <button type="submit"><GoSearch/></button>
                                {/* </a> */}
                            </Link>
                        </Barra_Pesquisa>
                    </li>
                    <li><a href="#">login</a></li>
                    <li><CgShoppingCart/></li>
                </ul>
            </Navigation>
        </>
    )
}