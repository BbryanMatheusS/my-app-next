function GlobalStyle(){
    return(
      <style global jsx>{`

      body{
        background-color:white ;
        font-size:16px;
      }

      header{
        max-width:1024px;
        margin: auto;
        padding: 10px 0px;
        display: flex;
        flex-direction:column;
        align-items:center;
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
          
        }


      footer{
        background-color: black;
      }
  
  
  
      `}</style>
    )
  }
  export default GlobalStyle