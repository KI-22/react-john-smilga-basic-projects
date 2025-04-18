import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// note: SWITCHED TO PERMANENT DOMAIN since tutorial video release
const url = 'https://course-api.com/react-tours-project' // kept receiving CORS error messages

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log("failed")
      // console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
  <main>
    <Tours />
  </main>
  );
}

export default App
