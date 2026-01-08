import { useState } from 'react'
import './App.css';


function App() {
  // 1. Define the submit handler function.
  // It receives the event object 'e' automatically from the form submission.
  const handleclick = (e) => {
    // Prevents the browser's default behavior of reloading the page on form submission
    e.preventDefault();
    
    // Logs a welcome message to the browser console
    console.log("WELCOME");
  }

  return (
    <>
      {/* 2. Attaches the handleclick function to the form's onSubmit event */}
      <form onSubmit={handleclick}>
        
        {/* Label and input for Name. 'htmlFor' links the label to the input 'id' */}
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" id="name" />
        
        {/* Label and input for Age */}
        <label htmlFor='age'>Age</label>
        <input type="number" name="age" id="age" />
        
        {/* The 'submit' type button triggers the form's onSubmit event when clicked */}
        <button type='submit'>GO</button>
        
      </form>
    </>
  )
}

export default App
