import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import api_Rick_Morty from "../../src/infra/api";

import Link from "next/link";
import { Filled_Square } from "../../src/components/Button";

import { Produtos } from "../../src/components/Produto";
import styled from "styled-components";

const Char = styled(Produtos)``;





export default function Personagem(){
    const [person,setPersorn] = useState([])
    
    const router = useRouter();
    console.log(router.query.id) 

    useEffect(() => {
        const personagem = async () => {
            const {data} = await api_Rick_Morty.get(`/character/${router.query.id}`)
             const char = data

             setPersorn(char)
            
        }
        personagem()
        
    },[router])
    
    console.log(person)

    
    
    return(
        <section>
            <h1>{person.name}</h1>
            <Char key={person.id}>
              <img src={person.image} />
              <p>
                {person.name} #{person.id}
              </p>
              <p>{person.especie}</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>

              <Link href={`/personagens/${person.id}`}>
                <Filled_Square Background_color="#03FFA5" Border="none">
                  <a>Ver solução</a>
                </Filled_Square>
              </Link>
            </Char>
        </section>

        

    )
}

