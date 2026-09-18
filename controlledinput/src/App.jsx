import { useState } from 'react'
import './App.css';

function App() {

  // State to store the value entered in the Name input field
  const [names, setnames] = useState("")

  // State to store the value entered in the Age input field
  const [age, setage] = useState("")

  // Updates 'names' state whenever the user types in the Name input
  function handlename(e) {
    setnames(e.target.value)
  }

  // Updates 'age' state whenever the user types in the Age input
  function handleage(e) {
    setage(e.target.value)
  }

  // 1. Define the submit handler function.
  // It receives the event object 'e' automatically from the form submission.
  const handleclick = (e) => {
    // Prevents the browser's default behavior of reloading the page on form submission
    e.preventDefault();

    // Logs the current Name and Age values to the browser console
    console.log(names, age)
  }

  return (
    <>
      {/* 2. Attaches the handleclick function to the form's onSubmit event */}
      <form onSubmit={handleclick}>

        {/* Label and input for Name. 'htmlFor' links the label to the input 'id' */}
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" id="names" value={names} onChange={handlename} />

        {/* Label and input for Age */}
        <label htmlFor='age'>Age</label>
        <input type="number" name="age" id="age" value={age} onChange={handleage} />

        {/* The 'submit' type button triggers the form's onSubmit event when clicked */}
        <button type='submit'>GO</button>

      </form>
    </>
  )
}

export default App