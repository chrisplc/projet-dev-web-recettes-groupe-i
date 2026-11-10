import { useEffect, useState } from 'react'

function App() {
  const [health, setHealth] = useState('chargement')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(`API ${data.status}, base ${data.database}`))
      .catch(() => setHealth('API injoignable'))
  }, [])

  return (
    <main>
      <h1>Recettes et listes de courses</h1>
      <p>{health}</p>
    </main>
  )
}

export default App
