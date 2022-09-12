function GlobalStyle(){
    return(
      <style global jsx>{`

      
      body{
        background-color:white ;
        font-size:16px;
        font-family: 'Barlow', sans-serif;
      }

      header{
        max-width:1024px;
        margin: auto;
        padding: 10px 0px;
        display: flex;
        flex-direction:column;
        align-items:center;
      }

      section{
        max-width:1024px;
        margin: auto;        
      }


      footer{
        background-color: black;
      }

      @media(min-width:1024px){
        header{
          padding: 10px 2rem;
          flex-direction:row;
        }
      }


      @media(min-width:1440px){
        header{
          max-width:1440px;
          flex-direction:row;
        }
        section{
          max-width:1440px;            
        }
      }
  
  
  
      `}</style>
    )
  }
  export default GlobalStyle