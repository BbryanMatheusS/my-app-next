import styled from "styled-components";
 
import Produto from "../../components/Produto";


const Conent = styled.div`
        align-items: center;
        padding: 2rem;
        display: flex;        
        flex-direction: column;
        
        h2{
            display: flex;
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: 700;
            align-self: center;
            strong{
                ::before{
                    content: "//";
                    font-size: 1.6rem;
                    color: #03FFA5;
                    font-weight: 700;
                }

            }
            
        }

        @media (min-width:1024px) {
            h2{
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
    
`;

export default function Our_soluctions(){

    return(
        
        <section>
            <Conent>
                <h2><strong>Nossas soluções</strong></h2>

                <Carrosel>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                </Carrosel>
                
            </Conent>            
        </section>
                

    )
}