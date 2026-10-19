

// Import the page components. Each one is a separate file (Home.jsx, About.jsx, Contact.jsx)
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

// BrowserRouter (renamed to Router) enables routing using the browser URL
// Routes holds all the route definitions and shows only the one that matches the URL
// Route defines a single path and the component to show for it
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// App is the root component of the application
function App() {
  return (
    // Router wraps the whole app so every component inside can use routing features
    <Router>

      {/* Routes looks at the current URL and renders only the first matching Route */}
      <Routes>

        {/* URL "/" (home page) shows the Home component */}
        <Route path='/' element={<Home />} />

        {/* URL "/about" shows the About component */}
        <Route path='/about' element={<About />} />

        {/* URL "/contact" shows the Contact component */}
        <Route path='/contact' element={<Contact />} />

        {/* "*" matches any URL not listed above, so unknown pages show a 404 message
            instead of a blank screen. Keep this as the last route. */}
        <Route path="*" element={<h1>404 - Page is Not Found </h1>} />

      </Routes>
    </Router>
  )
}

// Export App so main.jsx can import and render it
export default App