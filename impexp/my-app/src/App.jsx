import { useState } from 'react'

import './App.css'
import {books} from './book.jsx'
import  Book from './Books.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    { books.map((booksss,index) =>
      {
      return <Book key={index} book={booksss} index={index} />
      }
     )}
    </>
  )};

export default App
