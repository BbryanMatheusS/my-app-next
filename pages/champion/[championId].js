import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export const getStaticPaths = async() =>{

    const api = 'https://ddragon.leagueoflegends.com/cdn/12.20.1/data/pt_BR/champion.json'
    const res = await fetch(api)
    const dados = await res.json()
    const todosOsChamp = Object.keys(dados.data)
    console.log(todosOsChamp)

    // const paths = todosOsChamp.map((champ)=>{
    //     return {
    //         params:{championId: champ}
    //     }
    // })

    return {
        paths: [{ params: { championId: 'Aatrox' }}],
        // paths,
        fallback: true, 
    }
}

export const getStaticProps = async (context) =>{

    const id = context.params.championId

    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.20.1/data/pt_BR/champion/${id}.json`)

    const data = await res.json()

    // console.log(data)

    return {
        props: {champion: data.data},
    }
}

function Champions({champion}){

    // const api = 'https://ddragon.leagueoflegends.com/cdn/12.20.1/data/pt_BR/champion.json'

    // useEffect(() => {
    //     const buscandoApi = async () =>{
    //         const res = await fetch(api)
    //         const dados = await res.json()
    //         const todosOsChamp = Object.keys(dados.data)
    //         // console.log(todosOsChamp)

    //         const pat = todosOsChamp.map((champ)=>{
    //             return{
    //                 params:{pokemonId: (champ)}
    //             }
    //         })

    //         console.log(pat)
    //     }
    //     buscandoApi()
    // },[])

    

    const router = useRouter()

    const busca = champion

    const rota = router.query.championId

    

    // console.log(busca[rota].skins)
    

    if(router.isFallback){
        return <div>Carregando...</div>
    }
    
    const Content = styled.div`
        display: flex;
        background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${rota}_0.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;        
        height: 605px;
        flex-direction: column;       
        
        

        h1{
            display: inline-flex;
            font-size: 4rem;
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
            max-width: 70%;
            font-size: 1.4rem;
            padding: 1rem;
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
        margin: auto;

        
        h3{
            display: flex;
            margin: auto auto 20% auto;
            font-size:2rem;
            color: rgba(0,0,0,1);
            background-color: rgba(250,250,250,0.4);
            padding: 0.5rem;
            text-align: center;
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

            <h1>teste champions</h1>
            
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
                                <Skin key={skins.num} skin={skins.num}>
                                    <h3>{skins.name}</h3>
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