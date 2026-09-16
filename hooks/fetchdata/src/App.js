import  './App.css'

import React,{useState,useEffect} from "react";

 const url  = "https://api.github.com/users"

function App() {

  const [data,setData] = useState([])

  async function getData()
  {
     const res = await fetch(url);
     //console.log(res)
     const users = await res.json();
     console.log(users);
     setData(users)
     
  }
   
  useEffect(() => {
     getData()
     
  },[])
 
  return (
  <>
     <div className="container">
    { 
    
       data.map((user) => (
        
      <div className="card" key={user.id}>
        <img
          src={user.avatar_url}
          alt={user.login}
          width="120"
        />

        <h2>{user.login}</h2>

        <p>ID: {user.id}</p>

        <p>Type: {user.type}</p>

        <p>Admin: {user.site_admin ? "Yes" : "No"}</p>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View Profile
        </a>
      </div>
  
    ))
    
    }
    </div>
  </>
);
}

export default App;
