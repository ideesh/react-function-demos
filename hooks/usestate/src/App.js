import { useState } from "react";

function App() {
   const [name , setName] = useState("Welcome")
    let Clickchange = () =>
    { 
      name === "Welcome" ? setName("Thank you") : setName("Welcome")
  
    }
    
   return(
    <>
     <h2>{name}</h2>
     <button type="button" onClick={Clickchange} >change Name</button>
     </>
   
)
}

export default App;
