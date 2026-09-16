import { useState } from "react";

function App() {
   const [name , setName] = useState("ideesh hsk")
    let Clickchange = () =>
    { 
      name === "ideesh hsk" ? setName("IDEESH HOSKATTA") : setName("ideesh hsk")
  
    }
    
   return(
    <>
     <h2>{name}</h2>
     <button type="button" onClick={Clickchange} >change Name</button>
     </>
   
)
}

export default App;
