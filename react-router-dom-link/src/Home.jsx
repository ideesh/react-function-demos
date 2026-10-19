// Link is the React Router component for navigation without a full page reload
import { Link } from "react-router-dom"

// Home is a page component that shows a simple navigation menu
function Home() {
    return (
    // ul is an unordered list, used here as a basic menu
    <ul>
      {/* Link's "to" prop is the URL to go to. Clicking it changes the URL and shows the matching Route */}
      {/* "/" matches the Home route */}
      <li><Link to='/'>Home</Link></li>

      {/* "/About" goes to the About page */}
      <li><Link to='/About'>About</Link></li>

      {/* "/Contact" goes to the Contact page */}
      <li><Link to='/Contact'>Contact</Link></li>
    </ul>)

}

// Export Home so App.jsx can import it and use it in a Route
export default Home