import React from "react";
import { useState } from "react";
import "./App.css"

function App() {
  const [data,setData] = useState(false);
  function handleclick()
  {
    //setData(!data)
    setData(prev => !prev)
  
  }
  return (
    <>
    <div style={{ 
      backgroundColor: data ? "blue" : "red", 
      height: "100vh", 
      transition: "background-color 0.3s ease" // Smooth transition effect
    }}>
      <h1 className="heading">
        {data ? "good" : "bad"}
      </h1>
       <button  className="toggle-btn" onClick={handleclick}>clickme</button>
    </div>
   
   
    
    </>
  )
}

export default App;
