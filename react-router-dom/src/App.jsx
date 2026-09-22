import { useState } from 'react'
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<h1>404 - Page is Not Found </h1>} />
      </Routes>
    </Router>

  )
}

export default App
