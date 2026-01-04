import { useState } from "react";
import { data } from "./data";


function App() {
  const [names ,clearName] = useState(data);
  const removename = () =>
  {
   
    clearName(names.slice(1));

  }

  return (
   <>
     { 
       names.map((singledata) =>
        {
         return (
          <div>
             <h1 key={singledata.id}>{singledata.name}</h1>
          </div>
                );
        }
    )}
    <button type="button" onClick={removename}>Remove List</button>
   </>
  );
}

export default App;
