function GlobalStyle(){
    return(
      <style global jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      
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