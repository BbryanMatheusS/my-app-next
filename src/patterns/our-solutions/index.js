import styled from "styled-components";
import api_Rick_Morty from "../../infra/api";
import { useState, useEffect } from "react";
import { Produtos } from "../../components/Produto";
import { Filled_Square } from "../../components/Button";
import Link from "next/link";

const Conent = styled.div`
  align-items: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    display: flex;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 700;
    align-self: center;
    strong {
      ::before {
        content: "//";
        font-size: 1.6rem;
        color: #03ffa5;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 1024px) {
    h2 {
      align-self: flex-start;
      margin-left: 4rem;
      margin-bottom: 1rem;
    }
  }
`;

const Carrosel = styled.div`
  width: 90%;  
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  padding-bottom: 1rem;
`;

const Char = styled(Produtos)`
  img {
    border-radius: 25px;
  }
`;

export default function Our_soluctions() {
  const [personagens, setPersonagens] = useState([]);

  const fetchPerson = () => {
    let i = 1;
    // while(i<827){
    while (i < 50) {
      const personagens = async () => {
        const { data } = await api_Rick_Morty.get(`character/${i}`);
        setTimeout(() => {}, 1000);
        const response = await data;

        const personagem = {
          id: response.id,
          name: response.name,
          especie: response.species,
          img: response.image,
          gender: response.gender,
        };
        setPersonagens((prevState) => [...prevState, personagem]);
      };
      personagens();
      i++;
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <section id="Out_soluction">
      <Conent>
        <h2>
          <strong>Nossas soluções</strong>
        </h2>
        <Carrosel>
          {personagens.map((char) => {
            return (
              <Char key={char.id}>
                <img src={char.img} />
                <p>
                  {char.name} #{char.id}
                </p>
                <p>{char.especie}</p>
                <ul>
                  <li>Genero:{char.gender}</li>
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
        </Carrosel>
      </Conent>
    </section>
  );
}
