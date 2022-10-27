import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"




export default function Champions(){
    const [champion,setChampion] = useState([]);
    const [selected,setSelected] = useState('Aatrox');

    console.log(selected)


    function searchForChampion(event) {
        var API = `https://ddragon.leagueoflegends.com/cdn/12.19.1/data/pt_BR/champion/${selected}.json`

        axios.get(API).then(function(response){
            setChampion(response.data.data);
        }).catch(function (error){
            console.log(error);
        });
    }

    // console.log(champion[`${selected}`])
    

    
                
    


    const Content = styled.div`
        display: flex;
        background: url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${selected}_0.jpg');
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
        }

        p{
            display: inline-flex;
            margin: 2rem auto;
            color: rgba(0,0,0,1);
            background-color: rgba(250,250,250,0.4);
            max-width: 70%;
            font-size: 1.4rem;
        }

    `



    const Skins = styled.div`
        background: url('http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${selected}_0.jpg');
        width: 308px;
        height: 560px;
        color: white;
    `


    return(
        <section>
            <h1>
                league of legends
            </h1>

            <div>
                <h5>busca de campeões</h5>
                <input type="text" onChange={e => setSelected(e.target.value)}></input>
                <button onClick={e => searchForChampion(e)}>Buscar Champion</button>
            </div>

            <Content>
                {/* <h1>{champion[`${selected}`].name} : {champion[`${selected}`].title} </h1>
                <p>{champion[`${selected}`].lore}</p> */}
            </Content>



            <Skins>
                <h1>{selected}</h1>            
            </Skins>

        </section>
    )
}