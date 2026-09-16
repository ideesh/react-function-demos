import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client'; 


function Greeting()
{
 // return <h2>welcome people</h2>
 //jsx code 
 return React.createElement("div",{},React.createElement("h2",{},"hello  hoskatta"));

}

//ReactDOM.render(<Greeting/>, document.getElementById('root'))

ReactDOM.createRoot(document.getElementById('root')).render(<Greeting />);





