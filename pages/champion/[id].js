import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"




export default function Champions(){
    const [champion,setChampion] = useState([]);
    const [loading, setloading] = useState(true);

    

    const router = useRouter();
    

    const busca = router.query.id

    
    console.log(busca)

    useEffect(() => {
        setloading(true);
        chamada()

    },[busca])

    const chamada = async () =>{
        var API = `https://ddragon.leagueoflegends.com/cdn/12.19.1/data/pt_BR/champion/${busca}.json`
        const {data} = await axios.get(API)
        setChampion(data.data);

        champion[`${busca}`].skins.map((skin)=>{
            return(console.log(skin.num))
        })
        setloading(false);
    }

    setTimeout(() => {
        console.log(champion[busca])
    }, 1000);

    if (loading){
        setTimeout(()=>{},2000);
        return <span>carregando dados....</span>;
    } 

    
    const Content = styled.div`
        display: flex;
        background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${busca}_0.jpg');
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
        background: url('http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${busca}_${props => props.skin}.jpg');        
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
            
            <Content>
                <h1>{champion[`${busca}`].id} : {champion[`${busca}`].title} </h1>
                <p>{champion[`${busca}`].lore}</p>
            </Content>

            <Skins>
                <h2>Skins</h2>
                <All>                    
                    {
                        champion[`${busca}`].skins.map((skins)=>{
                            return(
                                <Skin skin={skins.num}>
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