import { useState } from 'react'


function App() {

const handleclick = (e) =>
{
  e.preventDefault();
  console.log("WELCOME");

}

  return(
  <>
  <form onSubmit= {handleclick}>
    <label htmlFor='name'>Name</label>
    <input type="text" name="name" id="name" />
    <label htmlFor='age'>Age</label>
    <input type="number" name="age" id="age" />
    <button type='submit'>GO</button>
  </form>
  </>
)
  
}

export default App
