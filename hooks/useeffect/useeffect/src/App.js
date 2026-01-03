import { useState,useEffect } from 'react';
import './App.css';

function App() {
const [count,Setcount] = useState(0)

useEffect(() => {
  console.log("Run")
});

 function increasevalue()
 {
  setTimeout(() => {
      Setcount(count =>  count + 1) // Functional update prevents bugs
    }, 0);
 }

  return (
    <>
      <h1 className='timer'>{count}</h1>
      <button type='button' onClick={increasevalue}>Click me</button>
    </>
  );
}

export default App;
