import React, { useState, useEffect } from 'react';

function App() {
  // loading starts as true
  const [loading, setLoading] = useState(true);

  // useEffect runs AFTER the component renders
  // The empty array [] means it only runs once — when the component first mounts
  useEffect(() => {
    // Simulate some async work (like an API call) using setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // switches loading to false after 2 seconds
    }, 2000);

    // Cleanup function — runs if the component unmounts before the timer finishes
    // Prevents memory leaks / warnings about updating state on an unmounted component
    return () => clearTimeout(timer);
  }, []); // empty dependency array = runs only once on mount

  if (loading) {
    return (
      <>
        <h1>Hello Engineers</h1>
      </>
    );
  }

  return (
    <>
      <h1>Hi Engineers</h1>
    </>
  );
}

export default App;