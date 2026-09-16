
import { useState,useEffect,/*useRef*/ } from 'react';

function App() {
 const [text,setData] = useState("")

 const first = text || "Ideesh";
 const second = text && "RABANE BANA DE JODI"
 
  useEffect(() => {
    setData("");
  }, []);
 

  return (
    <>
     <h1>value : {first}</h1>
     <h1>value : {second}</h1>
    
    </>
  );
}  

/*
  function App() {
  const [text, setData] = useState("");
  let inputref = useRef();
  

  return (
    <>
         <input
        type="text"
        ref={inputref}
        placeholder="Enter your name"
        

      />


      <h1>{text || "Ideesh"}</h1>
      <h1>{text && "RABANE BANA DE JODI"}</h1>
      

      <button onClick={() => setData(inputref.current.value)}>
        Change
      </button>
    </>
  );
}
  */

export default App;
