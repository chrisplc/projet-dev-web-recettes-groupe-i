import { useEffect, useState } from 'react'

function HomePage() {
  const [health, setHealth] = useState('chargement')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(`API ${data.status}, base ${data.database}`))
      .catch(() => setHealth('API injoignable'))
  }, [])

  return (
    <section>
      <h1 className="text-2xl font-semibold">Recettes et listes de courses</h1>
      <p className="mt-2 text-gray-600">
        Gère tes recettes et prépare tes listes de courses.
      </p>
      <p className="mt-6 text-sm text-gray-400">{health}</p>
    </section>
  )
}

export default HomePage
