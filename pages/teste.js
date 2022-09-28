import styled from "styled-components";
import api_Rick_Morty from "../src/infra/api";
import { useState, useEffect } from "react";
import { Produtos } from "../src/components/Produto";
import { Filled_Square } from "../src/components/Button";

import Link from "next/link";

const Char = styled(Produtos)``;

const Demo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Teste() {
  const [personagens, setPersonagens] = useState([]);
  let recerregar = 0;

  useEffect(() => {
    let i = 1;
    // while(i<827){
    while (i <= 100) {
      const personagens = async () => {
        const { data } = await api_Rick_Morty.get(`character/${i}`);
        const personagem = {
          id: data.id,
          name: data.name,
          especie: data.species,
          img: data.image,
        };
        setPersonagens((prevState) => [...prevState, personagem]);
      };
      personagens();
      i++;
    }
    console.log(personagens);
  }, []);

  return (
    <>
      <h1>teste da api</h1>

      <Demo>
        {personagens.map((char) => {
          return (
            <Char key={char.id}>
              <img src={char.img} />
              <p>
                {char.name} #{char.id}
              </p>
              <p>{char.especie}</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>

              <Link href={`/personagens/${char.id}`}>
                <Filled_Square Background_color="#03FFA5" Border="none">
                  <a>Ver solução</a>
                </Filled_Square>
              </Link>
            </Char>
          );
        })}
      </Demo>
    </>
  );
}
