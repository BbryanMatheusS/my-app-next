import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export const getStaticPaths = async() =>{

    // const api = 'https://ddragon.leagueoflegends.com/cdn/12.20.1/data/pt_BR/champion.json'              // sem o fallback
    // const res = await fetch(api)              // sem o fallback
    // const dados = await res.json()              // sem o fallback
    // const todosOsChamp = Object.keys(dados.data)              // sem o fallback
    // console.log(todosOsChamp)              // sem o fallback

    // const paths = todosOsChamp.map((champ)=>{              // sem o fallback
    //     return {
    //         params:{championId: champ}
    //     }
    // })

    return {
        paths: [{ params: { championId: 'Aatrox' }}],         //com o fallback
        // paths,                                             //sem o fallback
        fallback: true, 
    }
}

export const getStaticProps = async (context) =>{

    const id = context.params.championId

    const ID = id.charAt(0).toUpperCase() + id.slice(1)

    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.20.1/data/pt_BR/champion/${ID}.json`)

    const data = await res.json()

    return {
        props: {champion: data.data},
    }
}

function Champions({champion}){
    const[fundo, setFundo] = useState(0)

    const handleClick = (event) =>{
        setFundo(event)
    }


    // var teste = "primeira letra"

    // var letraMaiuscula = 

    // console.log(teste)
    // console.log(letraMaiuscula)


    const router = useRouter()

    const rota = router.query.championId

    if(router.isFallback){
        return <div>Carregando...</div>
    }
    
    const Content = styled.div`
        display: flex;
        background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${rota}_${fundo}.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;        
        height: auto;
        min-height: 605px;
        flex-direction: column;
        justify-content:center ;
        
        

        h1{
            display: inline-flex;
            font-size: 1.3rem;
            font-weight: 700;
            margin: 2rem auto;
            color: rgba(0,0,0,1);
            background-color: rgba(250,250,250,0.2);
            padding: 1rem;
        }

        p{
            display: inline-flex;
            margin: 2rem auto;
            color: rgba(0,0,0,1);
            background-color: rgba(250,250,250,0.4);
            max-width: 90%;
            font-size: 1rem;
            padding: 1rem;
        }

        @media(min-width: 1024px){
            
            h1{
                font-size: 4rem;
                font-weight: normal;
            }

            p{
                max-width: 70%;
                font-size: 1.4rem;
            }
        }

        @media(min-width: 1440px){
            min-height: 750px;
        }

    `
    const Skins = styled.div`
        display: flex;
        flex-direction: column;
        background-color: black;

        h2{
            display: block;
            margin: auto;
            color: rgba(250,250,250,0.2);
            
            font-size: 3rem;
            text-align: center;
            padding: 0 1rem;
        }

    `
    const Skin = styled.div`
        display: flex;
        background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${rota}_${props => props.skin}.jpg');        
        width: 308px;
        height: 560px;
        color: white;
        margin: 1rem auto;
        transition: 0.5s;

        
        h3{
            display: flex;
            margin: auto auto 20% auto;
            font-size:2rem;
            color: rgba(0,0,0,1);
            background-color: rgba(250,250,250,0.4);
            padding: 0.5rem;
            text-align: center;
        }

        :hover{
            transform: scale(1.1);
        }

    `
    const All = styled.div`
        display: flex;
        flex-wrap: wrap;
        
        h2{
            display: block;
            margin: auto;
            width: 50%;
            color: rgba(0,0,0,1);
            background-color: rgba(250,250,250,0.4);
            font-size: 3rem;
            text-align: center;
            
        }
        
    `

    return(
        <section>
            
            <Content>
                <h1>{champion[`${rota}`].id} : {champion[`${rota}`].title} </h1>
                <p>{champion[`${rota}`].lore}</p>
            </Content>

            <Skins>
                <h2>Skins</h2>
                <All>                    
                    {
                        champion[`${rota}`].skins.map((skins)=>{
                            return(
                                <Skin key={skins.num} skin={skins.num} onClick={() => handleClick(skins.num)}>
                                    <h3>{skins.name == "default" ? "Principal" : skins.name}</h3>
                                </Skin>
                            )
                        })
                    }
                </All>
            </Skins>
        </section>
    )
}


export default Champions;