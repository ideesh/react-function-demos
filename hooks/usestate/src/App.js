import { useState } from "react";

function App() {
  // useState("Welcome") creates a state variable "name" with initial value "Welcome"
  // setName is the function used to update "name" whenever we want to trigger a re-render
  const [name, setName] = useState("Welcome");

  // This function runs every time the button is clicked
  let Clickchange = () => {
    // Ternary condition: check if "name" is currently "Welcome"
    // If true  -> change it to "Thank you"
    // If false -> change it back to "Welcome"
    // This creates a toggle effect between the two strings
    name === "Welcome" ? setName("Thank you") : setName("Welcome");
  };

  return (
    <>
      {/* Displays the current value of "name" state */}
      <h2>{name}</h2>

      {/* onClick calls Clickchange, which updates state via setName */}
      {/* Updating state automatically re-renders the component with the new value */}
      <button type="button" onClick={Clickchange}>
        change Name
      </button>
    </>
  );
}

export default App;